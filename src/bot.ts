// Import "telegraf" library
import { Telegraf } from 'telegraf';

// Check if the BOT_TOKEN is defined in the environment variables
const TOKEN: string | undefined = process.env.BOT_TOKEN;

// If the BOT_TOKEN is not defined, exit the process
if (!TOKEN) {
	console.error('BOT_TOKEN is not defined in environment variables');
	process.exit(1);
}

// Create a bot instance.
const bot: Telegraf = new Telegraf(TOKEN);

// Start Command
bot.start((ctx) => {
	// Check if the chat id is not the one defined in the environment variables
	if (ctx.chat.id !== parseInt(process.env.CHAT_ID)) {
		process.exit(1);
	}
	// If the user is authorized, send a nice welcome message
	ctx.reply(
		`Hello, ${ctx.from.first_name}! 👋\nIt's an absolute pleasure to chat ` +
			`with you.\nI am Nulyx, your dedicated personal assistant.\n\n` +
			`Allow me to assist you with organizing your ideas and tasks, scheduling ` +
			`activities, and providing tailored recommendations for coding projects ` +
			`and anime series that match your interests.\n\n` +
			`With my support, you'll be able to stay productive and explore new ` +
			`horizons effortlessly. 🚀\n\nLet's embark on this exciting journey ` +
			`together, and together we'll achieve great things! 🌟`
	);
});

// Echo command
bot.command('echo', (ctx) => {
	// Check if the chat id is not the one defined in the environment variables
	if (ctx.chat.id !== parseInt(process.env.CHAT_ID)) {
		process.exit(1);
	}
	// Split the text message sent by the user
	const message: string[] = ctx.message.text.split(' ');
	// Remove the first element from array
	message.shift();

	ctx.reply(message.join(' '));
});

export { bot };
