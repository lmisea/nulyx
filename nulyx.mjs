// Import "telegraf" library
import { Telegraf } from 'telegraf';

// Create a bot instance.
const bot = new Telegraf(process.env.BOT_TOKEN);

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

// Function to run the bot. This function is the handler for the Lambda function.
export const nulyxBot = async (event) => {
	// Parse the event body
	const body = JSON.parse(event.body);

	// Check if the request is a Telegram API request
	if (body.hasOwnProperty('update_id')) {
		// If the request is a Telegram API request, pass the body to the bot instance
		await bot.handleUpdate(body);
		// Return a 200 response to acknowledge receipt of the update.
		return {
			statusCode: 200,
			body: JSON.stringify({
				message: 'Message received',
			}),
		};
	} else {
		// If the request is not a Telegram API request, return a 400 response
		return {
			statusCode: 400,
			body: JSON.stringify({
				message: 'Unsupported request',
			}),
		};
	}
};
