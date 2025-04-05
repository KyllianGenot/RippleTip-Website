// src/pages/TermsPage.tsx

const TermsPage = () => {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl pt-20 md:pt-24"> {/* Limit width for readability */}
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Terms of Service
        </h1>
        <div className="prose dark:prose-invert max-w-none space-y-4 text-gray-700 dark:text-gray-300"> {/* Basic prose styling */}
          <p>
            Welcome to RippleTip! These terms and conditions outline the rules and regulations for the use of RippleTip's Website and Discord Bot.
          </p>
          <p>
            By accessing this website and using our bot, we assume you accept these terms and conditions. Do not continue to use RippleTip if you do not agree to take all of the terms and conditions stated on this page.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Usage License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on RippleTip's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title...
          </p>
          {/* --- Add more placeholder or actual content below --- */}
          <p>[...]</p>
          <p>
            <strong>Last Updated:</strong> [Date]
          </p>
        </div>
      </div>
    );
  };
  
  export default TermsPage;