// src/components/features/HeroSection.tsx
import React from 'react';
// Import des sous-composants depuis le dossier hero
import { HeroBackground, HeroContent, HeroTransactionDemo, HeroStats } from '../hero';

export const HeroSection: React.FC = () => {
  return (
    // Augmenter le padding supérieur initial (pt-32) pour mobile/tablette
    // Ajuster le padding supérieur sur les grands écrans (lg:pt-36)
    // Réduire légèrement le padding inférieur sur mobile (pb-12)
    <section className="relative w-full min-h-screen overflow-hidden flex items-center pt-32 pb-12 md:pt-36 md:pb-16 lg:pb-20">
      <HeroBackground />

      <div className="relative z-10 container mx-auto px-4 w-full">
        {/* Layout principal : Colonne par défaut, Ligne sur lg */}
        {/* Réduire l'espacement vertical (gap-10) sur mobile/tablette */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-10 mb-12 md:mb-16"> {/* Réduit mb */}

            {/* Bloc Contenu */}
           <div className="w-full lg:w-1/2 xl:max-w-2xl text-center lg:text-left">
             <HeroContent />
           </div>

           {/* Bloc Démo */}
            {/* Réduire la marge supérieure sur mobile (mt-8) */}
           <div className="w-full max-w-sm sm:max-w-md lg:w-1/2 xl:max-w-lg mt-8 lg:mt-0"> {/* Réduit max-w initial */}
              <HeroTransactionDemo />
           </div>
         </div>

         {/* Section Stats */}
         {/* La marge supérieure est gérée par le mb du conteneur parent */}
         <HeroStats />
       </div>
       {/* Notifications supprimées */}
     </section>
  );
};