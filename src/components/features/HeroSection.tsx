import React from 'react';
import { HeroContent, HeroTransactionDemo, HeroStats } from '../hero';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center pt-32 pb-12 md:pt-36 md:pb-16 lg:pb-20">
      <div className="relative z-10 container mx-auto px-4 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-10 mb-12 md:mb-16">
           <div className="w-full lg:w-1/2 xl:max-w-2xl text-center lg:text-left">
             <HeroContent />
           </div>
           <div className="w-full max-w-sm sm:max-w-md lg:w-1/2 xl:max-w-lg mt-8 lg:mt-0">
              <HeroTransactionDemo />
           </div>
         </div>
         <HeroStats />
       </div>
     </section>
  );
};