const PrivacyPage = () => {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl pt-20 md:pt-24">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Privacy Policy
        </h1>
        <div className="prose dark:prose-invert max-w-none space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            Your privacy is important to us. It is RippleTip's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate, as well as our Discord bot.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
          <p>
            We only ask for personal information when we truly need it to provide a service to you (e.g., your Discord User ID for bot functionality). We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
          </p>
          <p>
            We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
          </p>
          <p>
            Specifically for the Discord bot, we may store your Discord User ID, server IDs where the bot is used, and transaction data related to tips. We do not store message content unrelated to bot commands.
          </p>
           <p>[...]</p>
           <p>
            <strong>Last Updated:</strong> [Date]
          </p>
        </div>
      </div>
    );
  };
  
  export default PrivacyPage;