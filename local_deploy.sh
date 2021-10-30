echo "Deploying local changes to dev..."
npm install
cd resources/lambda
npm install
cp node_modules build/
cd ../..
npm run build-lambda
npm run cdk deploy