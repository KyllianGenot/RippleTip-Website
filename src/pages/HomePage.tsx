// src/pages/HomePage.tsx
// Corrected imports
import {
  FeaturesSection,
  HowItWorksSection,
  CallToActionSection
} from '../components/features'; // Path likely correct if features is sibling to pages

import { AnimatedSection } from '../components/ui'; // Go up one level, then into components/ui
import { HeroSection } from '../components/features'; // Go up one level, then into components/hero

const HomePage = () => {
  return (
    <div>
      {/* Use the new HeroSection */}
      <HeroSection />

      {/* The rest of the page remains wrapped in AnimatedSection */}
      <AnimatedSection>
        <FeaturesSection />
      </AnimatedSection>

      <AnimatedSection>
        <HowItWorksSection />
      </AnimatedSection>

      <AnimatedSection>
        <CallToActionSection />
      </AnimatedSection>
    </div>
  );
};

export default HomePage;