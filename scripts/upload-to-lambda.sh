#!/usr/bin/bash
# This script is used to upload the zip file to AWS Lambda
# and it is meant to be run from 'npm run upload-to-lambda'.

# Please make sure that your sso profile is the one specified in this script
# and that you have the correct permissions to upload the zip file to AWS Lambda.
# If you don't have the correct permissions, please ask your AWS administrator to
# grant you the correct permissions.
# And if the sso profile is not the correct one, please change it to the correct one.

# Load aws profile from package.json
AWS_PROFILE=$(grep "awsProfile" package.json | awk -F '"' '{print $4}')

# Check if awsProfile is set
if [ -z "$AWS_PROFILE" ]; then
    echo "awsProfile is not set in package.json. Please set it first."
    exit 1
fi

# Check if zip file exists
if [ -f "aws_lambda/nulyx.zip" ]; then
    echo "Zip file located successfully!"
else
    echo "Zip file not found. Please run 'npm run create-zip' first."
    exit 1
fi

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "AWS CLI could not be found. Please install it first."
    exit 1
fi

# Check if there's internet connection
if ! ping -c 1 8.8.8.8 &> /dev/null; then
    echo "No internet connection. Please try again later."
    exit 1
fi

# Check if AWS credentials are configured
if ! aws sts get-caller-identity --profile $AWS_PROFILE &> /dev/null; then
    echo "AWS credentials could not be found."
    if [ ! -f "$HOME/.aws/config" ]; then
        echo "AWS config file could not be found."
        echo "Please run 'aws configure sso' to configure your AWS credentials."
        exit 1
    fi
    echo "AWS config file found. Please login first."
    aws sso login --profile $AWS_PROFILE
fi

# Check if nulyxBot function exists
if ! aws lambda get-function --function-name nulyxBot --profile $AWS_PROFILE &> /dev/null; then
    echo "No function named nulyxBot found. Please create it using aws console online."
    echo "Read the Deployment the first time section in the README.md file for more information."
    exit 1
fi

# Upload the zip file to AWS Lambda
echo "nulyxBot function located successfully. Uploading new zip file..."
echo "Please press 'q' once the information of the function is displayed."

if aws lambda update-function-code --function-name nulyxBot --zip-file fileb://aws_lambda/nulyx.zip --profile $AWS_PROFILE
then
    echo "Zip file uploaded sucessfully!"
else
    echo "Zip file could not be uploaded. Please try again."
    exit 1
fi
