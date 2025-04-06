import type { BotCommand } from '../types';

export const COMMANDS: BotCommand[] = [
  {
    name: 'create-wallet',
    description: 'Create a new XRPL wallet and connect it to your Discord account.',
    usage: '/create-wallet',
    category: 'Basic Commands',
  },
  {
    name: 'connect',
    description: 'Connect an existing XRPL wallet to your Discord account.',
    usage: '/connect <address> <seed>',
    category: 'Basic Commands',
  },
  {
    name: 'balance',
    description: 'Check your RLUSD balance or that of another user.',
    usage: '/balance [user]',
    category: 'Basic Commands',
  },
  {
    name: 'wallet',
    description: 'Display your or another user\'s wallet address and QR code.',
    usage: '/wallet [user]',
    category: 'Basic Commands',
  },
  {
    name: 'tip',
    description: 'Send RLUSD to a user or address.',
    usage: '/tip <address|@user> <amount> [message]',
    category: 'Transactions',
  },
  {
    name: 'history',
    description: 'View your RLUSD transaction history.',
    usage: '/history [limit]',
    category: 'Transactions',
  },
  {
    name: 'relations',
    description: 'View connected XRPL addresses of Discord users.',
    usage: '/relations',
    category: 'Relations',
  },
  {
    name: 'leaderboard',
    description: 'View the ranking of top RLUSD tippers and receivers.',
    usage: '/leaderboard [limit]',
    category: 'Statistics',
  },
  {
    name: 'help',
    description: 'Display general help or help for a specific command.',
    usage: '/help [command]',
    category: 'Help',
  },
];