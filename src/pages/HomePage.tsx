import { FeaturesSection, HowItWorksSection, CallToActionSection } from '../components/features';
import { AnimatedSection } from '../components/ui';
import { HeroSection } from '../components/features';

const HomePage = () => {
  return (
    <div>
      <HeroSection />

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