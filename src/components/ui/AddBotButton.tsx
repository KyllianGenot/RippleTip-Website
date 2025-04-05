// src/components/ui/AddBotButton.tsx
import React from 'react';
import Button from './Button'; // Importer le composant Button principal
import { DiscordIcon } from './icons'; // Importer l'icône Discord
import { BOT_INVITE_LINK } from '../../constants'; // Importer le lien constant

interface AddBotButtonProps {
  className?: string; // Pour classes de layout/visibilité
  onClick?: () => void; // Pour fermer le menu mobile
}

const AddBotButton: React.FC<AddBotButtonProps> = ({ className = '', onClick }) => {
  return (
    <Button
      as="a" // Rendu comme lien
      href={BOT_INVITE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      variant="discord" // Utiliser la nouvelle variante
      size="lg" // Utiliser la taille large
      className={className} // Passer les classes externes (ex: hidden md:inline-flex)
      onClick={onClick} // Passer le onClick pour fermer le menu mobile
      // Passer l'icône Discord à gauche
      iconLeft={<DiscordIcon className="w-5 h-5" />} // Ajuster taille si nécessaire
    >
      Add to Discord
    </Button>
  );
};

export default AddBotButton;