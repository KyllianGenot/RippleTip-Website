import React from 'react';
import Button from './Button';
import { DiscordIcon } from './icons';
// We don't need BOT_INVITE_LINK anymore

// Read from environment variables (Vite convention)
const clientId = import.meta.env.VITE_DISCORD_CLIENT_ID;
const redirectUri = import.meta.env.VITE_DISCORD_REDIRECT_URI;
// Generate state dynamically later - for now keep placeholder
const state = 'TEMPORARY_STATE';

// Construct the URL dynamically, ensuring the redirect URI is encoded
const DISCORD_OAUTH_URL = clientId && redirectUri
  ? `https://discord.com/oauth2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=identify&state=${state}`
  : '#'; // Fallback URL if variables are missing

interface ConnectDiscordButtonProps {
  className?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

const ConnectDiscordButton: React.FC<ConnectDiscordButtonProps> = ({
  className = '',
  onClick,
  size = 'lg',
}) => {
  // ADD THIS LINE for debugging:
  console.log("ConnectDiscordButton env vars:", import.meta.env);

  // Check if environment variables are set
  const isMisconfigured = !clientId || !redirectUri;

  if (isMisconfigured) {
    console.error("Discord environment variables (VITE_DISCORD_CLIENT_ID, VITE_DISCORD_REDIRECT_URI) are not set in .env file.");
    // Render a disabled button or provide feedback
    return (
        <Button
            variant="discord"
            size={size}
            className={className}
            disabled={true}
            iconLeft={<DiscordIcon className={size === 'lg' ? 'w-5 h-5' : size === 'md' ? 'w-4 h-4' : 'w-3.5 h-3.5'} />}
        >
            Discord Connect (Config Error)
        </Button>
    );
  }

  return (
    <Button
      as="a"
      href={DISCORD_OAUTH_URL}
      // Remove target and rel for same-window navigation
      variant="discord"
      size={size}
      className={className}
      onClick={onClick} // Keep onClick for potential mobile menu closing
      iconLeft={<DiscordIcon className={size === 'lg' ? 'w-5 h-5' : size === 'md' ? 'w-4 h-4' : 'w-3.5 h-3.5'} />}
    >
      Connect with Discord
    </Button>
  );
};

export default ConnectDiscordButton; 