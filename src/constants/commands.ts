// src/constants/commands.ts
import type { BotCommand } from '../types'; // Use index import if created

export const SAMPLE_COMMANDS: BotCommand[] = [
  {
    name: 'tip',
    description: 'Sends a tip to another user.',
    usage: 'tip <@user> <amount> [memo]',
    category: 'Core',
  },
  {
    name: 'balance',
    description: 'Check your current balance.',
    category: 'Core',
  },
  {
    name: 'help',
    description: 'Shows a list of available commands or info about a specific command.',
    usage: 'help [command_name]',
    category: 'Utility',
  },
  {
    name: 'ping',
    description: 'Checks the bot\'s latency.',
    category: 'Utility',
  },
   {
    name: 'deposit',
    description: 'Get your deposit address.',
    category: 'Core',
  },
  // Add more commands as needed
];