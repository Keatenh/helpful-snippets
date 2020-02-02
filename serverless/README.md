# Serverless AWS Deployment and Local Development Troubleshooting Exercises

## Uses Serverless Framework, nodejs, AWS Account
### - Note: The nodejs8 runtime is outdated with 2019 EOL. - 

1. exercise/ contains a Readme with a scenario that walks through troubleshooting issues with an existing Serverless Application that you host locally. See this doc for requirements and instructions.  


2. aws-deploy/ contains a serverless template for a simple public API Gateway endpoint that can be configured to your aws account. Requies S3 bucket and IAM role. See [The Serverless Framework AWS Docs](https://serverless.com/framework/docs/providers/aws/cli-reference/deploy/) for more info on how to configure your credentials and deploy your service using this template.