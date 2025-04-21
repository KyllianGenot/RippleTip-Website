const TermsPage = () => {
  const currentDate = "April 21, 2025";

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl pt-20 md:pt-24">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Terms of Service
      </h1>
      <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300">

        <p>
          Welcome to RippleTip! These Terms of Service ("Terms") govern your access to and use of the RippleTip website (<a href="https://rippletip.vercel.app" className="text-blue-600 dark:text-blue-400 hover:underline">https://rippletip.vercel.app</a>) and associated Discord bot (collectively, the "Service"), operated by "the RippleTip team" ("we", "us", or "our"). Please read these Terms carefully before using the Service.
        </p>
        <p>
          By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you disagree with any part of the terms, then you may not access the Service.
        </p>
        <p className="font-medium italic">
          RippleTip is an independent project and is not affiliated with, endorsed by, or sponsored by Ripple, the XRP Ledger Foundation, or Discord Inc.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">1. Description of Service</h2>
        <p>
          RippleTip provides tools to interact with the XRP Ledger (XRPL), primarily focused on facilitating tips or payments using RLUSD (or other specified tokens) via a Discord bot and associated web interface. Functionality includes creating/managing non-custodial XRPL wallets linked to Discord accounts, checking balances, sending/receiving tips, viewing transaction history, and participating in leaderboards.
        </p>
        <p>
           <strong>Important:</strong> We provide tools to interact with the XRPL, but we do not control the network itself. We are not a custodian of your funds. If you create a wallet through our service, you are responsible for securely storing any secret keys or recovery phrases provided. We cannot recover lost funds or wallets.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">2. Eligibility</h2>
        <p>
          You must be at least 13 years old to use the Service (or older if required by your local jurisdiction for financial services or cryptocurrency interactions). By using the Service, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms. If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">3. User Accounts and Responsibilities</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Authentication:</strong> Access to certain features requires authenticating via your Discord account. You are responsible for maintaining the confidentiality of your Discord account credentials.
          </li>
          <li>
            <strong>Wallet Security:</strong> You are solely responsible for the security of any XRP Ledger wallet associated with your account, including safeguarding private keys or secret numbers. RippleTip does not store your private keys and cannot access or recover your wallet if you lose your credentials.
          </li>
          <li>
            <strong>Accurate Information:</strong> You agree to provide accurate and complete information when using the Service, particularly if interacting with third-party services like MoonPay.
          </li>
          <li>
            <strong>Compliance:</strong> You agree to use the Service in compliance with all applicable local, state, national, and international laws, rules, and regulations, including those related to cryptocurrency, financial services, and data privacy.
          </li>
          <li>
            <strong>Taxes:</strong> You are solely responsible for determining what, if any, taxes apply to the transactions you conduct through the Service, and for reporting and remitting the correct tax to the appropriate tax authority.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">4. User Conduct</h2>
        <p>You agree not to use the Service to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Engage in any activity that is illegal, fraudulent, deceptive, or harmful.</li>
          <li>Violate the rights of others, including intellectual property rights.</li>
          <li>Transmit spam, chain letters, or other unsolicited communications.</li>
          <li>Distribute viruses, malware, or other harmful code.</li>
          <li>Interfere with or disrupt the integrity or performance of the Service or the XRPL network.</li>
          <li>Attempt to gain unauthorized access to the Service, user accounts, or related systems.</li>
          <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
          <li>Engage in any activity that could damage, disable, overburden, or impair the Service.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">5. Third-Party Services (e.g., MoonPay)</h2>
        <p>
          The Service may integrate with or provide links to third-party services, such as MoonPay for purchasing cryptocurrency. Your use of these third-party services is subject to their respective terms and privacy policies. We are not responsible for the operation, content, or practices of these third parties. Transactions conducted through third-party services are solely between you and the third party.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">6. Intellectual Property</h2>
        <p>
          The Service and its original content (excluding user-generated content and data on the XRPL), features, and functionality are and will remain the exclusive property of "the RippleTip team" and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">7. Disclaimers</h2>
        <p>
          THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
        </p>
        <p>
          WE ARE NOT RESPONSIBLE FOR ANY LOSSES INCURRED AS A RESULT OF USING THE XRP LEDGER OR ANY CRYPTOCURRENCY, INCLUDING BUT NOT LIMITED TO LOSSES DUE TO MARKET VOLATILITY, TRANSACTION ERRORS, FORGOTTEN PASSWORDS, OR SECURITY BREACHES. CRYPTOCURRENCY VALUES CAN FLUCTUATE SIGNIFICANTLY.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">8. Limitation of Liability</h2>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL "the RippleTip team", NOR ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE; (III) ANY CONTENT OBTAINED FROM THE SERVICE; AND (IV) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">9. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless "the RippleTip team" and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, or b) a breach of these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">10. Termination</h2>
        <p>
          We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">11. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of Paris, FRANCE, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
        </p>
        {/* Consider adding a Dispute Resolution / Arbitration clause if desired */}

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">12. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect (e.g., via a website announcement or Discord message). What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 border-b pb-2 border-gray-300 dark:border-gray-700">13. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us:
        </p>
        {/* TODO: Add actual contact method - align with Privacy Policy */}
        <p>Email: <a href="mailto:kygenot@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">kygenot@gmail.com</a></p>

        <p className="mt-8">
          <strong>Last Updated:</strong> {currentDate}
        </p>
      </div>
    </div>
  );
};

export default TermsPage;