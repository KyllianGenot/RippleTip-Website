import React, { useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CallbackPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  const hasAttemptedExchange = useRef(false);

  useEffect(() => {
    if (hasAttemptedExchange.current) {
      return;
    }

    const code = searchParams.get('code');
    const discordError = searchParams.get('error');
    const discordErrorDescription = searchParams.get('error_description');

    if (discordError === 'access_denied') {
      console.log('Discord access denied by user. Redirecting home.');
      hasAttemptedExchange.current = true;
      navigate(`/?discord_status=error&message=${encodeURIComponent(discordErrorDescription || 'Access denied by user.')}`, { replace: true });
      return;
    }

    if (!code) {
      console.error('No authorization code found in the callback URL.');
      hasAttemptedExchange.current = true;
      navigate(`/?discord_status=error&message=${encodeURIComponent('Missing authorization code.')}`, { replace: true });
      return;
    }

    hasAttemptedExchange.current = true;

    const exchangeCode = async (authCode: string) => {
      try {
        const response = await fetch('/api/auth/discord/exchange', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code: authCode }),
        });

        const data = await response.json();

        if (response.ok && data.success && data.user) {
          login(data.user);
          navigate('/?discord_status=success', { replace: true });
        } else {
          const errorMessage = data.message || 'Failed to connect Discord account.';
          console.error('Failed to exchange code:', errorMessage);
          navigate(`/?discord_status=error&message=${encodeURIComponent(errorMessage)}`, { replace: true });
        }
      } catch (err: any) {
        const errorMessage = err.message || 'An unexpected error occurred during Discord connection.';
        console.error("Callback exchange error:", err);
        navigate(`/?discord_status=error&message=${encodeURIComponent(errorMessage)}`, { replace: true });
      }
    };

    exchangeCode(code);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, login]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      <div className="text-center">
         <div className="animate-spin rounded-full h-12 w-12 border-4 border-solid border-gray-200 dark:border-gray-700 border-t-blue-500 dark:border-t-blue-400 mx-auto mb-4"></div>
         <p className="text-gray-600 dark:text-gray-400">Connecting your Discord account...</p>
      </div>
    </div>
  );
};

export default CallbackPage; 