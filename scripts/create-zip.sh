#!/usr/bin/bash
# This script is used to create a zip file with the compiled files
# and it is meant to be run from 'npm run create-zip'.

# Check if previous zip file exists
if [ -f "aws_lambda/nulyx.zip" ]; then
    echo "Removing previous zip file..."
    rm aws_lambda/nulyx.zip
fi

# Create the zip file
echo "Creating zip file..."
cd aws_lambda/ && zip -r nulyx.zip .

echo "Done!"
