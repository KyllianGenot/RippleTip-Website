// src/components/features/CallToActionSection.tsx
import { Button } from '../ui';
import { Link } from 'react-router-dom'; // Import Link if using internal navigation

const CallToActionSection = () => {
  // Reuse the same invite link as in the Hero section
  // TODO: Move this to constants/config later
  const BOT_INVITE_LINK = 'https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=YOUR_PERMISSIONS&scope=bot%20applications.commands';

  return (
    // Use background colors that change with the theme
    <section className="py-16 md:py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Ready to Simplify Tipping?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
          Add RippleTip to your Discord server today and start tipping with ease. It's free to get started!
        </p>
        {/* Use the primary button variant which respects dark mode */}
        <Button
          as="a"
          href={BOT_INVITE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary" // Primary variant should handle dark mode correctly
          size="lg"
        >
          Add RippleTip Now
        </Button>

        { /* Optional: Add a secondary link/button if needed */ }
        {/*
        <div className="mt-4">
          <Button as={Link} to="/features" variant="outline" size="md">
            Learn More
          </Button>
        </div>
        */}
      </div>
    </section>
  );
};

export default CallToActionSection;