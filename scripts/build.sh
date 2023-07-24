#!/usr/bin/bash
# This script is used to build the project and it is meant to be
# run from 'npm run build'.

# Check if node_modules folder does not exist
if [ ! -d "node_modules" ]; then
    echo "Installing project dependencies..."
    npm install
fi

# Check if dist folder does not exist
if [ ! -d "dist" ]; then
    echo "Creating dist folder..."
    mkdir dist
fi

# Check if aws_lambda/node_modules folder does not exist
if [ ! -d "aws_lambda/node_modules" ]; then
    echo "Installing aws_lambda function dependencies..."
    cd aws_lambda/ && npm install
fi

# Compile the project
echo "Compiling the project..."
tsc

# Copy the compiled files to dist folder
echo "Copying the files to dist folder..."
cp aws_lambda/index.js aws_lambda/bot.js dist/

# Move the test files to dist folder
echo "Moving the test files to dist folder..."
mv aws_lambda/test*.js dist/

echo "Project compiled successfully!"
