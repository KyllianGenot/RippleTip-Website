import React, { createContext, useState, useContext, useEffect, ReactNode, useCallback } from 'react';

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

  const login = (userData: User) => {
    setAuthState({
      isLoggedIn: true,
      user: userData,
      isLoading: false,
      isMoonPayWidgetVisible: false,
    });
  };

  const performLogout = useCallback(async () => {
      try {
          const response = await fetch('/api/auth/logout', { method: 'POST' });
          if (response.ok) {
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
          const response = await fetch('/api/auth/status');
          if (!response.ok) {
              throw new Error('Failed to fetch auth status');
          }
          const data = await response.json();
          if (data.loggedIn && data.user) {
              login(data.user);
          } else {
              setAuthState({ isLoggedIn: false, user: null, isLoading: false, isMoonPayWidgetVisible: false });
          }
      } catch (error) {
          console.error("Error checking auth status:", error);
          setAuthState({ isLoggedIn: false, user: null, isLoading: false, isMoonPayWidgetVisible: false }); // Assume logged out on error
      }
  }, []);

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