import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CallbackPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const code = searchParams.get('code');
    // Potential: Get state as well if implementing CSRF protection
    // const state = searchParams.get('state');

    if (!code) {
      setError('No authorization code found in the callback URL.');
      setIsLoading(false);
      // Optional: Redirect after a delay
      // setTimeout(() => navigate('/'), 3000);
      return;
    }

    const exchangeCode = async (authCode: string) => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/auth/discord/exchange', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          // Send the code in the request body
          body: JSON.stringify({ code: authCode /*, state: state */ }), 
        });

        const data = await response.json();

        if (response.ok && data.success && data.user) {
          // Update the global auth state
          login(data.user);
          // Redirect to the homepage after successful login
          navigate('/'); 
        } else {
          setError(data.message || 'Failed to exchange code for token.');
        }
      } catch (err: any) {
        console.error("Callback exchange error:", err);
        setError(err.message || 'An unexpected error occurred during login.');
      } finally {
         setIsLoading(false);
      }
    };

    exchangeCode(code);

  }, [searchParams, login, navigate]); // Dependencies for useEffect

  // Display loading or error message
  if (isLoading) {
    return <div>Loading... Please wait.</div>; // Replace with a proper loading spinner/component
  }

  if (error) {
    return (
        <div>
            <h2>Login Error</h2>
            <p>{error}</p>
            <button onClick={() => navigate('/')}>Go Home</button>
        </div>
    );
  }

  // Should ideally redirect before reaching here, but as a fallback:
  return <div>Processing complete. You should be redirected shortly.</div>;
};

export default CallbackPage; 