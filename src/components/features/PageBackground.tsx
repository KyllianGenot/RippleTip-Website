// src/components/features/PageBackground.tsx
import React from 'react';
import { useTheme } from '../../hooks';

export const PageBackground: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const blobBaseClasses = 'absolute rounded-full filter blur-3xl opacity-40 dark:opacity-25 mix-blend-multiply dark:mix-blend-screen animate-blob';

  return (
    <div className="fixed inset-0 w-full min-h-screen -z-10">
      {/* Fond de base solide */}
      <div className={`absolute inset-0 w-full h-full transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} />

      {/* Conteneur pour les blobs animés */}
      <div className="relative w-full min-h-screen">
        {/* Blob 1 - Cyan/Bleu (haut gauche) */}
        <div
          className={`${blobBaseClasses} w-1/3 h-1/3 top-[5%] left-[10%] animation-delay-none ${
            isDarkMode ? 'bg-cyan-900' : 'bg-cyan-200'
          }`}
          style={{ animationDuration: '15s' }}
        />

        {/* Blob 2 - Indigo/Violet (haut droit) */}
        <div
          className={`${blobBaseClasses} w-1/4 h-1/4 top-[15%] right-[15%] animation-delay-2000 ${
            isDarkMode ? 'bg-indigo-900' : 'bg-indigo-300'
          }`}
          style={{ animationDuration: '18s' }}
        />

        {/* Blob 3 - Pourpre/Rose (milieu gauche) */}
        <div
          className={`${blobBaseClasses} w-2/5 h-2/5 top-[40%] left-[20%] animation-delay-4000 opacity-35 dark:opacity-20 ${
            isDarkMode ? 'bg-purple-950' : 'bg-purple-200'
          }`}
          style={{ animationDuration: '16s' }}
        />

        {/* Blob 4 - Bleu Foncé/Bleu Clair (milieu droit) */}
        <div
          className={`${blobBaseClasses} w-1/3 h-1/3 top-[60%] right-[25%] animation-delay-1000 opacity-30 dark:opacity-15 ${
            isDarkMode ? 'bg-blue-950' : 'bg-blue-200'
          }`}
          style={{ animationDuration: '17s' }}
        />

        {/* Blob 5 - Vert subtil (bas gauche) - Adjusted position to avoid clipping */}
        <div
          className={`${blobBaseClasses} w-1/4 h-1/4 top-[75%] left-[15%] animation-delay-3000 opacity-25 dark:opacity-10 ${
            isDarkMode ? 'bg-emerald-900' : 'bg-emerald-200'
          }`}
          style={{ animationDuration: '19s' }}
        />
      </div>
    </div>
  );
};