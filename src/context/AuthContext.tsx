import React, { createContext, useState, useContext, useEffect, ReactNode, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Define the base URL for the API using environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

export interface User {
  id: string;
  username: string;
  globalName: string | null;
  avatar: string | null;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  isLoading: boolean; // To track initial status check
  isMoonPayWidgetVisible: boolean;
}

interface AuthContextProps extends AuthState {
  login: (userData: User) => void;
  logout: () => Promise<void>;
  checkStatus: () => Promise<void>;
  setMoonPayWidgetVisible: (visible: boolean) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isLoggedIn: false,
    user: null,
    isLoading: true, // Start loading initially
    isMoonPayWidgetVisible: false,
  });

  const setMoonPayWidgetVisible = (visible: boolean) => {
    setAuthState(prev => ({ ...prev, isMoonPayWidgetVisible: visible }));
  };

  // Wrap login in useCallback to stabilize its reference
  const login = useCallback((userData: User) => {
    setAuthState({
      isLoggedIn: true,
      user: userData,
      isLoading: false,
      isMoonPayWidgetVisible: false,
    });
  }, []);

  const performLogout = useCallback(async () => {
      try {
          // Include credentials for consistency
          const response = await fetch(`${API_BASE_URL}/api/auth/logout`, { method: 'POST', credentials: 'include' });
          const data = await response.json();

          if (data.success) {
              setAuthState({ isLoggedIn: false, user: null, isLoading: false, isMoonPayWidgetVisible: false });
              // Optionally redirect or update UI further
              console.log("Logout successful");
          } else {
              console.error("Logout failed:", await response.text());
              // Handle logout failure, maybe keep user logged in visually but show error?
              setAuthState(prev => ({ ...prev, isLoading: false })); // Stop loading even on error
          }
      } catch (error) {
          console.error("Error during logout:", error);
          setAuthState(prev => ({ ...prev, isLoading: false })); // Stop loading even on error
      }
  }, []);

  const checkStatus = useCallback(async () => {
      setAuthState(prev => ({ ...prev, isLoading: true })); // Set loading true during check
      try {
          // Explicitly include credentials (cookies) in the status request
          const response = await fetch(`${API_BASE_URL}/api/auth/status`, { credentials: 'include' });
          console.log("[AuthContext checkStatus] Response Status:", response.status);

          // Log raw response text before parsing
          const responseText = await response.text();
          console.log("[AuthContext checkStatus] Raw Response Text:", responseText);

          if (!response.ok) {
              console.error('Auth status check failed:', response.status, response.statusText, "Response:", responseText);
              setAuthState({ isLoggedIn: false, user: null, isLoading: false, isMoonPayWidgetVisible: false }); // Assume logged out if status check fails badly
          } else {
              // Parse the response text as JSON
              try {
                  const data = JSON.parse(responseText);
                  console.log("[AuthContext checkStatus] Parsed Data:", data);
                  if (data.loggedIn && data.user) {
                      login(data.user);
                  } else {
                      setAuthState({ isLoggedIn: false, user: null, isLoading: false, isMoonPayWidgetVisible: false });
                  }
              } catch (parseError) {
                  console.error("[AuthContext checkStatus] Failed to parse JSON response:", parseError, "Raw text was:", responseText);
                  setAuthState({ isLoggedIn: false, user: null, isLoading: false, isMoonPayWidgetVisible: false });
              }
          }
      } catch (error) {
          console.error("Error checking auth status:", error);
          setAuthState({ isLoggedIn: false, user: null, isLoading: false, isMoonPayWidgetVisible: false }); // Assume logged out on error
      }
  }, [login]);

  // Check status on initial load
  useEffect(() => {
    checkStatus();
  }, [checkStatus]);

  // Effect to check for post-login MoonPay opening
  useEffect(() => {
    if (authState.isLoggedIn) {
      const openMoonPay = localStorage.getItem('openMoonPayAfterLogin');
      if (openMoonPay === 'true') {
        console.log('Detected post-login MoonPay flag. Opening widget.')
        setMoonPayWidgetVisible(true);
        localStorage.removeItem('openMoonPayAfterLogin'); // Clear the flag
      }
    }
    // Run only when login status changes to true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState.isLoggedIn]);

  return (
    <AuthContext.Provider value={{ ...authState, login, logout: performLogout, checkStatus, setMoonPayWidgetVisible }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 