const PrivacyPage = () => {
  const currentDate = "April 21, 2025";

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl pt-20 md:pt-24">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Privacy Policy
      </h1>
      <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300">

        <p>
          Your privacy is important to us. It is RippleTip's policy to respect your privacy regarding any information we may collect from you across our website (<a href="https://rippletip.vercel.app" className="text-blue-600 dark:text-blue-400 hover:underline">https://rippletip.vercel.app</a>) and our associated Discord bot ("Service").
        </p>
        <p className="font-medium italic">
          RippleTip is an independent project and is not affiliated with, endorsed by, or sponsored by Ripple, the XRP Ledger Foundation, or Discord Inc.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">1. Information We Collect</h2>
        <p>We collect information necessary to provide and improve our Service. This includes:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Discord Account Information:</strong> When you authenticate using Discord, we receive your Discord User ID, username, global display name, and avatar URL. This is used to identify you within our Service, link your XRPL wallet (if created via our Service), and display your profile information.
          </li>
          <li>
            <strong>Usage Data:</strong> We collect information about your interactions with the Service, such as commands used with the Discord bot, tipping activity (sender ID, receiver ID or address, amount, optional message, timestamp), wallet balances queried, and pages visited on the website.
          </li>
          <li>
            <strong>Server Information:</strong> For bot functionality, we may store the ID of the Discord servers where the bot is installed and used.
          </li>
          <li>
            <strong>XRPL Wallet Information:</strong> If you create a wallet using our Service, we store the public XRPL address associated with your Discord account. We do not store your private keys or secret numbers. You are solely responsible for the security of your wallet credentials if generated outside our service or exported.
          </li>
          <li>
            <strong>Cookies and Similar Technologies:</strong> We use cookies (small text files stored on your device) for session management (keeping you logged in) and potentially for analytics to understand how our website is used. You can control cookie preferences through your browser settings.
          </li>
          <li>
            <strong>Information from Third Parties:</strong> If you use integrated third-party services like MoonPay to add funds, we may receive transaction confirmation details, but we do not receive or store your payment card or bank account information.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">2. How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Operate, maintain, and improve the RippleTip Service.</li>
          <li>Authenticate users via Discord OAuth2.</li>
          <li>Facilitate tipping transactions on the XRP Ledger using RLUSD (or other specified tokens).</li>
          <li>Display user profiles, balances, transaction history, and leaderboards.</li>
          <li>Connect Discord users to their corresponding XRPL public addresses within the service.</li>
          <li>Communicate with you, including responding to support requests or announcing service updates (if applicable).</li>
          <li>Monitor for security purposes and prevent fraudulent activity.</li>
          <li>Analyze usage patterns to enhance user experience (using aggregated or anonymized data where possible).</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">3. Data Sharing and Disclosure</h2>
        <p>We do not sell your personal information. We may share your information in the following limited circumstances:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>With Your Consent:</strong> We may share information if you give us explicit permission.
          </li>
          <li>
            <strong>Public Blockchain Data:</strong> Transactions conducted via the Service (tips) are recorded on the public XRP Ledger and are inherently public. This includes sender address, receiver address, amount, and potentially memo data. Your Discord ID is not directly stored on the blockchain by us, but observers might infer connections based on service usage patterns.
          </li>
          <li>
            <strong>Third-Party Service Providers:</strong> We may use third-party companies for hosting, analytics, or other services (e.g., MoonPay for payments). These providers only have access to the information necessary to perform their functions and are obligated to protect it. We integrate with:
            <ul className="list-disc pl-6 mt-1">
              <li><strong>Discord:</strong> For authentication. See <a href="https://discord.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Discord's Privacy Policy</a>.</li>
              <li><strong>MoonPay:</strong> For fiat-to-crypto purchases. See <a href="https://www.moonpay.com/legal/privacy_policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">MoonPay's Privacy Policy</a>. You interact directly with MoonPay when using their widget.</li>
              {/* Add other providers like hosting (e.g., Vercel, AWS) if known */}
            </ul>
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose your information if required by law, subpoena, or other legal process, or if we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
          </li>
          <li>
            <strong>Business Transfers:</strong> If RippleTip is involved in a merger, acquisition, or asset sale, your information may be transferred. We will provide notice before your information is transferred and becomes subject to a different privacy policy.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">4. Data Security</h2>
        <p>
          We implement commercially reasonable security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or electronic storage is 100% secure. While we strive to use acceptable means to protect your personal information, we cannot guarantee its absolute security. You are responsible for maintaining the security of your Discord account and any XRPL wallet credentials.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">5. Data Retention</h2>
        <p>
          We retain your personal information only for as long as necessary to provide you with the Service and fulfill the purposes outlined in this policy. Discord account information is retained while your account is active with us. Transaction data may be retained longer as required for operational purposes or legal compliance, balanced against data minimization principles. Data associated with the public XRP Ledger persists indefinitely on the blockchain.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">6. Your Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>The right to access the personal information we hold about you.</li>
          <li>The right to request correction of inaccurate information.</li>
          <li>The right to request deletion of your personal information (subject to certain exceptions, like legal obligations or data required for service functionality).</li>
          <li>The right to object to or restrict certain processing.</li>
          <li>The right to data portability (where applicable).</li>
        </ul>
        <p>To exercise these rights, please contact us using the information below. Note that deleting certain information may prevent us from providing the Service to you.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">7. Children's Privacy</h2>
        <p>
          Our Service is not intended for individuals under the age of 13 (or a higher age threshold depending on the jurisdiction, especially concerning financial services). We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to remove that information. If you believe your child has provided us with information, please contact us.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">8. Links to Other Websites</h2>
        <p>
          Our Service may contain links to other websites or services (like Discord or MoonPay) that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">9. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes are effective when they are posted on this page. Your continued use of the Service after changes constitutes acceptance of the new policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">10. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        {/* TODO: Add actual contact method - e.g., email address or link to a support channel/server */}
        <p>Email: <a href="mailto:kygenot@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">kygenot@gmail.com</a></p>


        <p className="mt-8">
          <strong>Last Updated:</strong> {currentDate}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;