# AWS Lambda (Node JS + TypeScript)

## Links

- [Using TypeScript with NodeJS](https://www.section.io/engineering-education/how-to-use-typescript-with-nodejs/)
- [Building Lambda functions with TypeScript](https://docs.aws.amazon.com/lambda/latest/dg/lambda-typescript.html)
- [Testing the Lambda Functions](https://docs.aws.amazon.com/lambda/latest/dg/testing-functions.html)


## Deploy Steps

- Build
```
npm run build
```

- Deply (fresh)
```
aws lambda create-function --function-name hello-world-nodets --zip-file "fileb://dist/index.zip" --runtime "nodejs16.x" --role arn:aws:iam::832107848017:role/LaxmiLearn-AWSLambdaExecutionRole --handler index.gatewayEventHandler
```

- Deploy (update)
```
aws lambda update-function-code --function-name hello-world-nodets --zip-file "fileb://dist/index.zip"
```

