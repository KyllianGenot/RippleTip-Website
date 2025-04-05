// src/components/features/hero/HeroBackground.tsx
import React from 'react';
import { useTheme } from '../../hooks'; // Ajustez le chemin si nécessaire

export const HeroBackground: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Classes de base pour les "blobs" de dégradé
  const blobBaseClasses = 'absolute rounded-full filter blur-3xl opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen animate-blob';
  // Note: mix-blend-multiply (light) / screen (dark) aide à l'intégration, mais peut être ajusté/supprimé.

  return (
    // Conteneur principal pour l'arrière-plan
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      {/* Fond de base solide (réagit au thème via le body/parent) */}
      <div className={`absolute inset-0 w-full h-full transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} />

      {/* Conteneur pour les blobs animés */}
      {/* Placé légèrement décalé pour un effet moins centré */}
      <div className="relative w-full h-full transform -translate-x-1/4 -translate-y-1/4 scale-125">

        {/* Blob 1 - Cyan/Bleu */}
        <div
          className={`${blobBaseClasses} w-3/5 h-3/5 top-0 left-0 animation-delay-none ${
            isDarkMode ? 'bg-cyan-900' : 'bg-cyan-200'
          }`}
          // animation-duration peut être ajusté ici ou via CSS
          style={{ animationDuration: '15s' }}
        />

        {/* Blob 2 - Indigo/Violet */}
        <div
          className={`${blobBaseClasses} w-2/5 h-2/5 top-1/4 right-0 animation-delay-2000 ${
             isDarkMode ? 'bg-indigo-900' : 'bg-indigo-300'
           }`}
           style={{ animationDuration: '18s' }}
        />

        {/* Blob 3 - Pourpre/Rose (plus subtil) */}
        <div
          className={`${blobBaseClasses} w-1/2 h-1/2 bottom-0 left-1/4 animation-delay-4000 opacity-40 dark:opacity-20 ${
             isDarkMode ? 'bg-purple-950' : 'bg-purple-200'
           }`}
           style={{ animationDuration: '16s' }}
        />

        {/* Blob 4 - Bleu Foncé/Bleu Clair (plus petit) */}
         <div
           className={`${blobBaseClasses} w-1/3 h-1/3 bottom-1/4 right-1/4 animation-delay-1000 opacity-30 dark:opacity-15 ${
              isDarkMode ? 'bg-blue-950' : 'bg-blue-200'
            }`}
            style={{ animationDuration: '17s' }}
         />
      </div>
    </div>
  );
};