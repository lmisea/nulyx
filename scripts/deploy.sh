#!/usr/bin/bash
# This script is used to deploy the project to AWS Lambda, and
# it is meant to be run from 'npm run deploy'.
# This script will compile the project, create the zip file and
# upload the zip file to AWS Lambda.

# Please make sure that your sso profile is the one specified in upload-to-lambda.sh

# Compile the project
npm run build

# Create the zip file
npm run create-zip

# Upload the zip file to AWS Lambda
npm run upload-to-lambda
