import { bot } from './bot.js';
// This is the main handler function that will be called by the Lambda function
export const handler = async (event) => {
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
    }
    // If the request is not a Telegram API request, return a 400 response
    return {
        statusCode: 400,
        body: JSON.stringify({
            message: 'Unsupported request',
        }),
    };
};
