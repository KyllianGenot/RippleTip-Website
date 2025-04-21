import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  FeaturesSection,
  HowItWorksSection,
  CallToActionSection,
  HeroSection,
  FaqSection,
} from '../components/features';
import { AnimatedSection } from '../components/ui';

const HomePage = () => {
  const [searchParams, _setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const discordStatus = searchParams.get('discord_status');
    const message = searchParams.get('message');

    if (discordStatus) {
      if (discordStatus === 'success') {
        toast.success('Successfully connected Discord account!');
      } else if (discordStatus === 'error') {
        toast.error(`Failed to connect Discord: ${message || 'Unknown error'}`);
      }

      // Clean up URL parameters after showing toast
      // Use navigate with replace: true to avoid adding a new entry to history
      searchParams.delete('discord_status');
      searchParams.delete('message');
      navigate('.', { replace: true, state: {} }); // Navigate to current path without params
    }
  // We only want this to run once on mount when params might be present
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures it runs only once on mount

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
        <FaqSection />
      </AnimatedSection>

      <AnimatedSection>
        <CallToActionSection />
      </AnimatedSection>
    </div>
  );
};

export default HomePage;