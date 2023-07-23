// Import "telegraf" library
import { Telegraf } from 'telegraf';
// Check if the BOT_TOKEN is defined in the environment variables
const TOKEN = process.env.BOT_TOKEN;
// If the BOT_TOKEN is not defined, exit the process
if (!TOKEN) {
    console.error('BOT_TOKEN is not defined in environment variables');
    process.exit(1);
}
// Create a bot instance.
const bot = new Telegraf(TOKEN);
// Start Command
bot.start((ctx) => ctx.reply('Hello World!'));
// Echo command
bot.command('echo', (ctx) => {
    // Split the text message sent by the user
    const message = ctx.message.text.split(' ');
    // Remove the first element from array
    message.shift();
    ctx.reply(message.join(' '));
});
export { bot };
