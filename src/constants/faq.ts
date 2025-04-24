import { IconType } from 'react-icons';
import { FaQuestionCircle } from 'react-icons/fa';

export interface FaqItem {
  question: string;
  answer: string;
  icon: IconType;
}

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'What is WaveTip?',
    answer:
      '<b>WaveTip</b> is a <b>Discord bot</b> that lets you <b>send and receive small amounts of money (RLUSD)</b> like a <b>tip</b> — just by using <b>commands</b>.<br/><b>No crypto knowledge needed</b>.',
    icon: FaQuestionCircle,
  },
  {
    question: 'How do I use it?',
    answer:
      '1. <b>Add WaveTip</b> to your Discord server (you need to be admin).<br/>2. Go to our website and <b>log in with Discord</b>.<br/>3. Add money with your <b>card (fiat to RLUSD)</b> using the "<b>Add Funds</b>" button.<br/>4. Use commands like /tip @friend 2 to send money on Discord.',
    icon: FaQuestionCircle,
  },
  {
    question: 'How do I add WaveTip to my server?',
    answer:
      'You need to be <b>admin</b> or have permission to add bots.<br/>Click "<b>Add to Discord</b>" on our site, choose your server, and authorize WaveTip.',
    icon: FaQuestionCircle,
  },
  {
    question: 'What is RLUSD?',
    answer:
      'RLUSD is a <b>digital dollar</b> (a stablecoin) on the <b>XRP Ledger</b>, backed by <b>Ripple</b>.<br/>1 RLUSD = 1 USD.',
    icon: FaQuestionCircle,
  },
  {
    question: 'Do I need a wallet or crypto account?',
    answer:
      '<b>No!</b> We handle everything for you.<br/>Just log in with Discord — we link your Discord account to a wallet in the background.',
    icon: FaQuestionCircle,
  },
  {
    question: 'Is there identity verification (KYC)?',
    answer:
      'For small payments (10–50€), only <b>email + card</b> is needed.<br/>Larger deposits may require <b>full KYC</b>.',
    icon: FaQuestionCircle,
  },
  {
    question: 'Can I receive tips without signing up?',
    answer:
      "<b>Yes!</b> If someone tips you and you haven't logged in yet, the money is stored.<br/>Just sign in later to claim it.",
    icon: FaQuestionCircle,
  },
  {
    question: 'Are there fees?',
    answer:
      "Yes, but they're very low.<br/><b>WaveTip takes 1%</b> per transaction — that's it.",
    icon: FaQuestionCircle,
  },
  {
    question: 'Is my money safe?',
    answer:
      '<b>Yes.</b> WaveTip uses secure systems to manage wallets.<br/>You never deal with crypto keys — everything is tied to your <b>Discord ID</b>.',
    icon: FaQuestionCircle,
  },
  {
    question: 'How fast are transactions?',
    answer:
      'Transactions on WaveTip are processed in just a few <b>seconds</b>, thanks to the speed of the <b>XRP Ledger</b>.<br/>You send a tip, and your friend gets it almost instantly.',
    icon: FaQuestionCircle,
  },
]; 