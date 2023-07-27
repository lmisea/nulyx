/*
 * This file contains the code for the Nulyx Telegram bot.
 * It is responsible for handling the user's messages and sending replies.
 * It also contains the code for the commands that the user can send to the bot.
 * The bot is only available to the user defined in the environment variables.
 * If the user is not authorized, the bot will exit and no reply will be sent.
 */
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
/**
 * This function handles the /start command.
 * It sends a welcome message to the user if it is authorized.
 * Otherwise, it exits the process.
 */
bot.start((ctx) => {
    // Check if the chat id is not the one defined in the environment variables
    if (ctx.chat.id !== parseInt(process.env.CHAT_ID)) {
        process.exit(1);
    }
    // If the user is authorized, send a nice welcome message
    ctx.reply(`Hello, ${ctx.from.first_name}! 👋\nIt's an absolute pleasure to chat ` +
        `with you.\nI am Nulyx, your dedicated personal assistant.\n\n` +
        `Allow me to assist you with organizing your ideas and tasks, scheduling ` +
        `activities, and providing tailored recommendations for coding projects ` +
        `and anime series that match your interests.\n\n` +
        `With my support, you'll be able to stay productive and explore new ` +
        `horizons effortlessly. 🚀\n\nLet's embark on this exciting journey ` +
        `together, and together we'll achieve great things! 🌟`);
});
/**
 * This function handles the /echo command.
 * It sends a message with the same text as the user's message.
 */
bot.command('echo', (ctx) => {
    // Check if the chat id is not the one defined in the environment variables
    if (ctx.chat.id !== parseInt(process.env.CHAT_ID)) {
        process.exit(1);
    }
    // Split the text message sent by the user
    const message = ctx.message.text.split(' ');
    // Remove the first element from array
    message.shift();
    ctx.reply(message.join(' '));
});
export { bot };
