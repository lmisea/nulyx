#!/usr/bin/bash
# This script is used to build the project and it is meant to be
# run from 'npm run build'.

# Check if dist folder does not exist
if [ ! -d "dist" ]; then
    mkdir dist
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

echo "Done!"
