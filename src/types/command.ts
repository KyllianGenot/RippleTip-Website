// src/types/command.ts
export interface BotCommand {
  name: string;
  description: string;
  usage?: string;
  category: string;
  // Add other relevant fields if needed (e.g., required permissions)
}