/*
 * This file is used to test the bot with GitHub Actions.
 * It simulates a /start command from the user.
 * The objetive of this test is to check if the bot is working properly.
 */

import { APIGatewayProxyEvent } from 'aws-lambda';
import dotenv from 'dotenv';
import { Update } from 'telegraf/types';
import { lambdaHandler } from '../aws_lambda/index.js';

// Load the environment variables from the .env file
dotenv.config();

// Get the chat id from the environment variables
const chatId: string | undefined = process.env.CHAT_ID;

// Check if the chat id is defined
if (!chatId) {
	console.error('CHAT_ID is not defined in environment variables');
	process.exit(1);
}

// This is a Telegram API request for a /start command from an authorized user
const startCommandUpdate: Update = {
	update_id: 13679231,
	message: {
		message_id: 164,
		from: {
			id: parseInt(chatId),
			is_bot: false,
			first_name: 'Luis Miguel',
			username: 'lmisea',
			language_code: 'en',
		},
		chat: {
			id: parseInt(chatId),
			first_name: 'Luis Miguel',
			username: 'lmisea',
			type: 'private',
		},
		date: 1690131442,
		text: '/start',
		entities: [
			{
				offset: 0,
				length: 6,
				type: 'bot_command',
			},
		],
	},
};

// This is the event that will be passed to the lambdaHandler function
const event: APIGatewayProxyEvent = {
	body: JSON.stringify(startCommandUpdate),
	headers: {},
	multiValueHeaders: {},
	httpMethod: 'POST',
	isBase64Encoded: false,
	path: '',
	pathParameters: null,
	queryStringParameters: null,
	multiValueQueryStringParameters: null,
	stageVariables: null,
	requestContext: {
		authorizer: null,
		accountId: '',
		apiId: '',
		protocol: '',
		httpMethod: '',
		identity: {
			accessKey: null,
			accountId: null,
			apiKey: null,
			apiKeyId: null,
			caller: null,
			clientCert: null,
			cognitoAuthenticationProvider: null,
			cognitoAuthenticationType: null,
			cognitoIdentityId: null,
			cognitoIdentityPoolId: null,
			principalOrgId: null,
			sourceIp: '',
			user: null,
			userAgent: null,
			userArn: null,
		},
		path: '',
		stage: '',
		requestId: '',
		requestTimeEpoch: 0,
		resourceId: '',
		resourcePath: '',
	},
	resource: '',
};

/**
 * This is a test function to try out the bot with GitHub Actions.
 * The objetive of this test is to simulate a /start command
 * and check if the bot replies with the welcome message.
 */
const testStart = async () => {
	lambdaHandler(event).then((response) => {
		console.log(response);
	});
};

// Call the test function. The authorized user should receive a welcome message.
testStart();
