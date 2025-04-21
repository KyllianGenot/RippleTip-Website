import { IconType } from 'react-icons';
import { FaQuestionCircle } from 'react-icons/fa';

export interface FaqItem {
  question: string;
  answer: string;
  icon: IconType;
}

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'What is RippleTip?',
    answer:
      'RippleTip is a Discord bot that lets you send and receive small amounts of money (RLUSD) like a tip — just by using commands.\nNo crypto knowledge needed.',
    icon: FaQuestionCircle,
  },
  {
    question: 'How do I use it?',
    answer:
      '1. Add RippleTip to your Discord server (you need to be admin).\n2. Go to our website and log in with Discord.\n3. Add money with your card (fiat to RLUSD) using the "Add Funds" button.\n4. Use commands like /tip @friend 2 to send money on Discord.',
    icon: FaQuestionCircle,
  },
  {
    question: 'How do I add RippleTip to my server?',
    answer:
      'You need to be admin or have permission to add bots.\nClick "Add to Discord" on our site, choose your server, and authorize RippleTip.',
    icon: FaQuestionCircle,
  },
  {
    question: 'What is RLUSD?',
    answer:
      'RLUSD is a digital dollar (a stablecoin) on the XRP Ledger, backed by Ripple.\n1 RLUSD = 1 USD.',
    icon: FaQuestionCircle,
  },
  {
    question: 'Do I need a wallet or crypto account?',
    answer:
      'No! We handle everything for you.\nJust log in with Discord — we link your Discord account to a wallet in the background.',
    icon: FaQuestionCircle,
  },
  {
    question: 'Is there identity verification (KYC)?',
    answer:
      'For small payments (10–50€), only email + card is needed.\nLarger deposits may require full KYC, depending on the provider.',
    icon: FaQuestionCircle,
  },
  {
    question: 'Can I receive tips without signing up?',
    answer:
      "Yes! If someone tips you and you haven't logged in yet, the money is stored.\nJust sign in later to claim it.",
    icon: FaQuestionCircle,
  },
  {
    question: 'Are there fees?',
    answer:
      "Yes, but they're very low.\nRippleTip takes 1% per transaction — that's it.",
    icon: FaQuestionCircle,
  },
  {
    question: 'Is my money safe?',
    answer:
      'Yes. RippleTip uses secure systems to manage wallets.\nYou never deal with crypto keys — everything is tied to your Discord ID.',
    icon: FaQuestionCircle,
  },
  {
    question: 'How fast are transactions?',
    answer:
      'Transactions on RippleTip are processed in just a few seconds, thanks to the speed of the XRP Ledger.\nYou send a tip, and your friend gets it almost instantly.',
    icon: FaQuestionCircle,
  },
]; 