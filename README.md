# Nulyx Personal Assistant Bot

![Love](https://img.shields.io/badge/Made%20with-Love-pink?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0SHViIFNwb25zb3JzIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0xNy42MjUgMS40OTljLTIuMzIgMC00LjM1NCAxLjIwMy01LjYyNSAzLjAzLTEuMjcxLTEuODI3LTMuMzA1LTMuMDMtNS42MjUtMy4wM0MzLjEyOSAxLjQ5OSAwIDQuMjUzIDAgOC4yNDljMCA0LjI3NSAzLjA2OCA3Ljg0NyA1LjgyOCAxMC4yMjdhMzMuMTQgMzMuMTQgMCAwIDAgNS42MTYgMy44NzZsLjAyOC4wMTcuMDA4LjAwMy0uMDAxLjAwM2MuMTYzLjA4NS4zNDIuMTI2LjUyMS4xMjUuMTc5LjAwMS4zNTgtLjA0MS41MjEtLjEyNWwtLjAwMS0uMDAzLjAwOC0uMDAzLjAyOC0uMDE3YTMzLjE0IDMzLjE0IDAgMCAwIDUuNjE2LTMuODc2QzIwLjkzMiAxNi4wOTYgMjQgMTIuNTI0IDI0IDguMjQ5YzAtMy45OTYtMy4xMjktNi43NS02LjM3NS02Ljc1em0tLjkxOSAxNS4yNzVhMzAuNzY2IDMwLjc2NiAwIDAgMS00LjcwMyAzLjMxNmwtLjAwNC0uMDAyLS4wMDQuMDAyYTMwLjk1NSAzMC45NTUgMCAwIDEtNC43MDMtMy4zMTZjLTIuNjc3LTIuMzA3LTUuMDQ3LTUuMjk4LTUuMDQ3LTguNTIzIDAtMi43NTQgMi4xMjEtNC41IDQuMTI1LTQuNSAyLjA2IDAgMy45MTQgMS40NzkgNC41NDQgMy42ODQuMTQzLjQ5NS41OTYuNzk3IDEuMDg2Ljc5Ni40OS4wMDEuOTQzLS4zMDIgMS4wODUtLjc5Ni42My0yLjIwNSAyLjQ4NC0zLjY4NCA0LjU0NC0zLjY4NCAyLjAwNCAwIDQuMTI1IDEuNzQ2IDQuMTI1IDQuNSAwIDMuMjI1LTIuMzcgNi4yMTYtNS4wNDggOC41MjN6Ii8+PC9zdmc+)
![Smyles](https://img.shields.io/badge/Makes%20people-Smyle-cyan?style=for-the-badge)
![Open Source](https://img.shields.io/badge/Open%20Source%20%3F-Yes%21-blue?style=for-the-badge&logo=github)

Nulyx: A Personal Telegram Bot Assistant for Organization and Decision-Making.

## To-Do List for the Project

- [x] Create a Telegram bot.
- [x] Deploy it using AWS Lambda.
- [ ] Use a free database to store the data of the bot.
- [ ] Note Storage and Organization: Store and categorize your notes by subject.
- [ ] Activity Scheduling and Reminders: Schedule activities and receive timely reminders.
- [ ] Decision-Making Assistance: Save coding project ideas and anime series suggestions for easier decision-making.
- [ ] Book and Media Tracking: Keep track of the books you've read and the anime/TV series you've watched.
- [ ] Customization: Personalize Nulyx by adjusting settings and preferences.
- [x] Create a local based version of the bot, so it can be used without AWS Lambda.

## Getting Started

You can clone this repository to get a copy of the project up and running on your local machine for development and testing purposes. See [Deployment with AWS Lambda](#deployment-with-aws-lambda) for notes on how to deploy the project using AWS Lambda.
The instructions below will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) v18.17.0 (This is the version used in the project, but v18.x should work)
- [npm](https://www.npmjs.com/) (recommended v9.6.7 or higher)

### Installing

1. Clone the repository

```bash
git clone https://github.com/lmisea/nulyx.git
```

2. Move to the project folder and switch to the local branch

```bash
cd nulyx && git checkout local
```

3. Create or rewrite the .env file

```bash
echo -e "BOT_TOKEN=<BOT_TOKEN>\nCHAT_ID=<CHAT_ID>" > .env
```

Where **<BOT_TOKEN>** is the token of the bot you created in Telegram. This is given by the BotFather. And **<CHAT_ID>** is the ID of the chat where you want to receive the messages from the bot. You can get this ID by sending a message to the bot and then using the following command:

```bash
curl https://api.telegram.org/bot<BOT_TOKEN>/getUpdates
```

**Note:** If you have previously set the webhook for the bot, you need to delete it using the following command:

```bash
curl https://api.telegram.org/bot<BOT_TOKEN>/deleteWebhook
```

Then you can receive the updates and get the chat ID. Finally, you can set the webhook again using the following command:

```bash
curl https://api.telegram.org/bot<BOT_TOKEN>/setWebhook?url=https://api.telegram.org/bot<BOT_TOKEN>/getUpdates
```

4. Build the project

```bash
npm run build
```

### Running the bot locally

To run the bot locally, you must have followed the steps in the [Installing](#installing) section. Then you can run the following command once you are in the **_local_** branch:

```bash
npm run start
```

## Deployment with AWS Lambda

For this project, I have used [**_AWS Lambda_**](https://aws.amazon.com/lambda/) to deploy the bot. Basically, AWS Lambda is a serverless computing service that allows you to run code without provisioning or managing servers. It is a great service for running small applications like this bot.

### Prerequisites

- [AWS Account](https://aws.amazon.com/)
- [AWS CLI](https://aws.amazon.com/cli/) (recommended v2.13.1 or higher)
- Configured [AWS IAM](https://aws.amazon.com/iam/) for your root user in order to create a new user with the necessary permissions for the bot. You can follow the steps in the [AWS documentation](https://docs.aws.amazon.com/singlesignon/latest/userguide/getting-started.html) to create a new user with the necessary permissions (AdministratorAccess or PowerUserAccess should work).
- Previously configured [AWS SSO](https://docs.aws.amazon.com/cli/latest/userguide/sso-configure-profile-token.html).
- Finally, log in to your SSO profile using the following command:

```bash
aws sso login --profile <PROFILE_NAME>
```

Where **<PROFILE_NAME>** is the name of your SSO profile.

### Deployment the first time

This project has a couple of scripts that will help you deploy the bot to AWS Lambda. But they work once the function has been created. So, the first time you deploy the bot, you need to follow the steps below:

- Log in to your [AWS Console](https://console.aws.amazon.com/).
- Go to the [AWS Lambda](https://aws.amazon.com/lambda/) service.
- Create a new function.
- Configure the function as follows:
  - **Create function from scratch.**
  - **Function name:** _nulyxBot_.
  - **Runtime:** _Node.js 18.x_.
  - **Arquiteture:** _x86_64_.
  - In the **Advanced settings** section, enable the **Enable function ULR** option.
  - In the **Auth type** section, select **None**.
  - Leave the rest of the options as default.
- Once created, go to the **Configuration** tab.
- Create two new _Environment variables_: **BOT_TOKEN** and **CHAT_ID**. The values of these variables are the same as in the [Installing](#installing) section.
- Lastly, go to the **Code** tab and select the **Upload from** option. Then select _.zip file_ and upload the zip file that is in the **_aws_lambda_** folder of the project.

### Deployment after the first time

After you meet the prerequisites in the [Prerequisites](#prerequisites) section and you have followed the steps in the [Deployment the first time](#deployment-the-first-time) section, you can update the bot using the following command:

```bash
npm run deploy
```

This script compiles the project, creates a new zip file with the compiled code, and updates the function code in AWS Lambda.
**DISCLAIMER:** This script will not work the first time you deploy the bot. You need to follow the steps in the [Deployment the first time](#deployment-the-first-time) section. And also you need to specify the name of the aws sso profile you are using in the package.json file with the key **awsProfile**.

## License

This project is licensed under the terms of the [**MIT license**](https://github.com/lmisea/nulyx/blob/main/LICENSE).

This project also uses the [**Telegraf**](https://github.com/telegraf/telegraf) library, which is licensed under the terms of the [**MIT license**](https://github.com/telegraf/telegraf/blob/v4/LICENSE).

This project also uses the [**Dotenv**](https://github.com/motdotla/dotenv) library, which is licensed under the terms of the [**BSD-2-Clause license**](https://github.com/motdotla/dotenv/blob/master/LICENSE).
