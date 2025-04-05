export interface BotCommand {
  name: string;
  description: string;
  usage?: string;
  category: string;
}