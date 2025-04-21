export interface HowToStep {
  step: number;
  title: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: HowToStep[] = [
  {
      step: 1,
      title: 'Add RippleTip to Server',
      description: 'Invite the bot to your Discord server using the "Add to Discord" button.',
  },
  {
      step: 2,
      title: 'Create Your Wallet',
      description: 'Use the `/create-wallet` command to generate your personal tipping wallet.',
  },
  {
      step: 3,
      title: 'Fund Your Wallet',
      description: "Deposit RLUSD into your wallet using the on-ramp 'Add Funds' button, or the generated QR code.",
  },
  {
      step: 4,
      title: 'Send Tips',
      description: 'Type `/tip @username amount [optional message]` to send tips to anyone.',
  },
];