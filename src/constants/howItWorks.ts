// src/constants/howItWorks.ts
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
      title: 'Use Tip Command',
      description: 'Simply type `/tip @username amount [optional message]` in any channel where the bot is present.',
    },
    {
      step: 3,
      title: 'Confirm & Send',
      description: 'The bot will confirm the details, and the tip is sent instantly to the recipient\'s balance.',
    },
    {
      step: 4,
      title: 'Manage Balance',
      description: 'Use `/balance` to check your funds or `/deposit` / `/withdraw` (if applicable) to manage them.',
    },
  ];