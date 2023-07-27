#!/usr/bin/bash
# This script is used to build the project and it is meant to be
# run from 'npm run build'.

# Check if node_modules folder does not exist
if [ ! -d "node_modules" ]; then
    echo "Installing project dependencies..."
    npm install
fi

# Check if aws_lambda/node_modules folder does not exist
if [ ! -d "aws_lambda/node_modules" ]; then
    echo "Installing aws_lambda function dependencies..."
    cd aws_lambda/ && npm install
fi

# Compile the project
echo "Compiling the project..."
tsc --build

# Removing test d.ts files and tsconfig.tsbuildinfo
echo "Removing test d.ts files and tsconfig.tsbuildinfo..."
rm -f test/*.d.ts test/*.tsbuildinfo

echo "Project compiled successfully!"
