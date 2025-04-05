// src/components/ui/AddBotButton.tsx
import React from 'react';
import Button from './Button';
import { DiscordIcon } from './icons'; // Chemin corrigé
import { BOT_INVITE_LINK } from '../../constants';

interface AddBotButtonProps {
  className?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

const AddBotButton: React.FC<AddBotButtonProps> = ({
  className = '',
  onClick,
  size = 'lg',
}) => {
  return (
    <Button
      as="a"
      href={BOT_INVITE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      variant="discord"
      size={size}
      className={className}
      onClick={onClick}
      iconLeft={<DiscordIcon className={size === 'lg' ? 'w-5 h-5' : size === 'md' ? 'w-4 h-4' : 'w-3.5 h-3.5'} />}
    >
      Add to Discord
    </Button>
  );
};

export default AddBotButton;