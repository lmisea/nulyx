# Nulyx Personal Assistant Bot

![Love](https://img.shields.io/badge/Made%20with-Love-pink?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0SHViIFNwb25zb3JzIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0xNy42MjUgMS40OTljLTIuMzIgMC00LjM1NCAxLjIwMy01LjYyNSAzLjAzLTEuMjcxLTEuODI3LTMuMzA1LTMuMDMtNS42MjUtMy4wM0MzLjEyOSAxLjQ5OSAwIDQuMjUzIDAgOC4yNDljMCA0LjI3NSAzLjA2OCA3Ljg0NyA1LjgyOCAxMC4yMjdhMzMuMTQgMzMuMTQgMCAwIDAgNS42MTYgMy44NzZsLjAyOC4wMTcuMDA4LjAwMy0uMDAxLjAwM2MuMTYzLjA4NS4zNDIuMTI2LjUyMS4xMjUuMTc5LjAwMS4zNTgtLjA0MS41MjEtLjEyNWwtLjAwMS0uMDAzLjAwOC0uMDAzLjAyOC0uMDE3YTMzLjE0IDMzLjE0IDAgMCAwIDUuNjE2LTMuODc2QzIwLjkzMiAxNi4wOTYgMjQgMTIuNTI0IDI0IDguMjQ5YzAtMy45OTYtMy4xMjktNi43NS02LjM3NS02Ljc1em0tLjkxOSAxNS4yNzVhMzAuNzY2IDMwLjc2NiAwIDAgMS00LjcwMyAzLjMxNmwtLjAwNC0uMDAyLS4wMDQuMDAyYTMwLjk1NSAzMC45NTUgMCAwIDEtNC43MDMtMy4zMTZjLTIuNjc3LTIuMzA3LTUuMDQ3LTUuMjk4LTUuMDQ3LTguNTIzIDAtMi43NTQgMi4xMjEtNC41IDQuMTI1LTQuNSAyLjA2IDAgMy45MTQgMS40NzkgNC41NDQgMy42ODQuMTQzLjQ5NS41OTYuNzk3IDEuMDg2Ljc5Ni40OS4wMDEuOTQzLS4zMDIgMS4wODUtLjc5Ni42My0yLjIwNSAyLjQ4NC0zLjY4NCA0LjU0NC0zLjY4NCAyLjAwNCAwIDQuMTI1IDEuNzQ2IDQuMTI1IDQuNSAwIDMuMjI1LTIuMzcgNi4yMTYtNS4wNDggOC41MjN6Ii8+PC9zdmc+)
![Smyles](https://img.shields.io/badge/Makes%20people-Smyle-cyan?style=for-the-badge)
![Open Source](https://img.shields.io/badge/Open%20Source%20%3F-Yes%21-blue?style=for-the-badge&logo=github)

Nulyx: A Personal Telegram Bot Assistant for Organization and Decision-Making.

## To-Do List for the Project

- [x] Create a Telegram bot.
- [x] Create a Google Cloud Function to deploy the bot.
- [x] Set the webhook for the bot.
- [ ] Create a Firestore database to store the data of the bot.
- [ ] Note Storage and Organization: Store and categorize your notes by subject.
- [ ] Activity Scheduling and Reminders: Schedule activities and receive timely reminders.
- [ ] Decision-Making Assistance: Save coding project ideas and anime series suggestions for easier decision-making.
- [ ] Book and Media Tracking: Keep track of the books you've read and the anime/TV series you've watched.
- [ ] Customization: Personalize Nulyx by adjusting settings and preferences.
- [x] Create a local based version of the bot, so it can be used without Google Cloud Platform.

## Getting Started

You can fork or clone this repository to get a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. The instructions below will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (recommended v20.0.0 or higher)
- [npm](https://www.npmjs.com/) (recommended v9.0.0 or higher)

### Installing

1. Clone the repository

```bash
git clone https://github.com/lmisea/nulyx.git
```

1. Move to the project folder and switch to the local branch

```bash
cd nulyx && git checkout local
```

3. Install the dependencies

```bash
npm install
```

3. Rewrite the .env file

```bash
echo "BOT_TOKEN=<BOT_TOKEN>" > .env
```

Where **BOT_TOKEN** is the token of the bot you created in Telegram. This is given by the BotFather.

### Running the bot locally

To run the bot locally, you can use the following command:

```bash
npm run start
```

## Deployment with Google Cloud Platform

For this project, I have used Google Cloud Platform. I have used Google Cloud Functions to deploy the bot. I am also planning to use Google Cloud Firestore to store the data of the bot. I have used the free tier of Google Cloud Platform, so the cost of the project is totally free.

_Note_: In order to use Google Cloud Platform, you need to have a payment method associated with your account. This means you need to have an international credit or debit card. But you will not be charged unless you upgrade to a paid account or exceed the free tier limits (which is very unlikely).

### Deploy a new Nulyx Google Cloud Function

Google Cloud Functions are serverless functions, so they are easy to deploy and maintain. To deploy a new function, you need to have a Google Cloud Platform account and a project created. You can create a new project in the [Google Cloud Console](https://console.cloud.google.com/).

I have used the [Google Cloud SDK](https://cloud.google.com/sdk) to deploy the function. You can install it using the following command (for Linux and macOS):

```bash
curl https://sdk.cloud.google.com | bash
```

After installing the SDK, you need to initialize it using the following command:

```bash
gcloud init
```

This will open a browser window where you can log in to your Google account. After that, you will be able to select the project you want to use with:

```bash
gcloud config set project <PROJECT_ID>
```

Where **PROJECT_ID** is the ID of the project you created in Google Cloud Platform.

Then, if you already cloned the repository, **move to the project folder** and you can deploy the function using the following command:

```bash
gcloud functions deploy nulyxBot --set-env-vars "BOT_TOKEN=<BOT_TOKEN>" --runtime nodejs20 --trigger-http --project=<PROJECT_ID> --region=<REGION> --source=. --allow-unauthenticated
```

Where:

- **nulyxBot**: The name of the function that will be deployed. This function lives in the _nuylx.js_ file.
- **BOT_TOKEN**: The token of the bot you created in Telegram. This is given by the BotFather.
- **PROJECT_ID**: The ID of the project you created in Google Cloud Platform.
- **REGION**: The region where you want to deploy the function. You can check the available regions for Cloud Functions here: [regions](https://cloud.google.com/functions/docs/locations).

_Note_: I have really tried to use a secret with secret manager for the bot token, but I have not been able to make it work. I will continue to try in the future. But for now, the bot token is passed as an environment variable.

### Set the webhook for the bot

After deploying the function, you will get a URL. You need to use this URL to set the webhook for the bot. A webhook is a URL that Telegram will use every time a user sends a message to the bot, supplying the message information.

You can set a new webhook for your bot in the Telegram API using the following command:

```bash
curl -F "url=<URL>" https://api.telegram.org/bot<BOT_TOKEN>/setWebhook
```

If everything goes well, you will get a response like this:

```json
{
	"ok": true,
	"result": true,
	"description": "Webhook was set"
}
```

After that, **you will be able to use the bot**.

### Delete Nulyx Google Cloud Function

In case you want to delete the function from GCP, you can use the following command:

```bash
gcloud functions delete nulyxBot --region=<REGION>
```

Where:

- **nulyxBot**: The name of the function that will be deleted.
- **REGION**: The region where the function is deployed.

## License

This project is licensed under the terms of the [**MIT license**](https://github.com/lmisea/nulyx/blob/main/LICENSE).

This project also uses the [**Telegraf**](https://github.com/telegraf/telegraf) library, which is licensed under the terms of the [**MIT license**](https://github.com/telegraf/telegraf/blob/v4/LICENSE).

This project also uses the [**Dotenv**](https://github.com/motdotla/dotenv) library, which is licensed under the terms of the [**BSD-2-Clause license**](https://github.com/motdotla/dotenv/blob/master/LICENSE).
