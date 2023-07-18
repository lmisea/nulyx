// Import "telegraf" library
const { Telegraf } = require('telegraf');

// Function to run the bot. This function is called by the Cloud Function
exports.nulyxBot = (request, response) => {
	if (request.method == 'POST') {
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

		// Launch the bot
		bot.launch();
		response.sendStatus(200);
	} else {
		response.sendStatus(403);
	}
};
