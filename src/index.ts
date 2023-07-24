/*
 * This is the main entry point for the nulyxBot Lambda function.
 * lambdaHandler will be invoked when the Lambda function is triggered.
 */

// Import the necessary libraries or types
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Update } from 'telegraf/types';
import { bot } from './bot.js';

/**
 * This function is the handler for the AWS Lambda function.
 * If the event is a Telegram API request, it will pass it to the bot instance.
 * @param event The invocation event from AWS Lambda
 * @returns A 200 response if the event is a Telegram API request, a 400 response otherwise
 */
export const lambdaHandler = async (
	event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
	// Parse the event body
	const body: Update = JSON.parse(event.body);

	// Check if the request is a Telegram API request
	if (Object.prototype.hasOwnProperty.call(body, 'update_id')) {
		// If the request is a Telegram API request, pass the body to the bot instance
		await bot.handleUpdate(body);
		// Return a 200 response to acknowledge receipt of the update.
		return {
			// 200 code means that the request was processed successfully
			statusCode: 200,
			body: JSON.stringify({
				message: 'Message received',
			}),
		};
	}
	// If the request is not a Telegram API request, return a 400 response
	return {
		// 400 code means that the request was malformed or invalid
		statusCode: 400,
		body: JSON.stringify({
			message: 'Unsupported request',
		}),
	};
};
