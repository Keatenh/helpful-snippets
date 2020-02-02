# Serverless Exercise for Troubleshooting Issues in Local Environment

Adapted from [Serverless/examples](https://github.com/serverless/examples/tree/master/aws-node-rest-api-with-dynamodb-and-offline) <- Credit to author for the api setup.  

This example demonstrates how to run a service locally, using the
[serverless-offline](https://github.com/dherault/serverless-offline) plugin. It
provides a REST API to manage Todos stored in a DynamoDB, similar to the
[aws-node-rest-api-with-dynamodb](https://github.com/serverless/examples/tree/master/aws-node-rest-api-with-dynamodb)
example. A local DynamoDB instance is provided by the
[serverless-dynamodb-local](https://github.com/99xt/serverless-dynamodb-local)
plugin.

## Use-case

No AWS Access is required; No networking tasks, nor specific AWS credentials or IAM roles.   
Attempt to simplify experience of working on a full Serverless Application without need to set up resources outside of local machine.  

## Requirements

* git  
* curl or Postman, etc. for http requests  
* nodejs, npm [link](https://nodejs.org/en/download/) (v8.16.0)   
* Serverless {npm install -g serverless} (1.41.1)
* Java Runtime Engine (JRE) version 6.X or newer
    Required by plugin: [serverless-dynamodb-local] (https://github.com/99xt/serverless-dynamodb-local)
    `java -version` outputs: Java(TM) SE Runtime Environment (build 1.8.0_161-b12)  
    https://docs.oracle.com/goldengate/1212/gg-winux/GDRAD/java.htm#BGBFJHAB

For 2nd half of demo (UI)
* Yarn {npm install -g yarn} (1.15.2) 
* Web browser (Chrome)  
 
The rest of our dependencies are found in package.json for the 2 sets of services, will be installed via "npm install” in those directories.


# The Task

You and I have been declared the "goto" DevOps team for prepping some new developers for success with Serverless architectures.  
This folder contains the files for a local deployment of a fullstack "MVP" (fraction of TODO App) that we have been tasked with getting prepped for deployment into a cloud environment.  
If we can get the local deployment running as intended, we can help the devs continue their progress while they are waiting on access to the AWS account.  

The setup is a set of Lambdas, representing different REST requests, hosted behind API Gateway endpoints and interacting with a database (DynamoDB) to create and list TODO items. These api routes are meant to be called by ui componenents that update and display the data in a certain format.

# Validation Steps - Run the following without errors:

## Part 1. - in svc-back/
```bash
npm install
```
```bash
sls package
```
```bash
serverless dynamodb install
```
To start our local dynamodb endpoint, and effectively sls deploy to local:
```bash
serverless offline start
```
Try:  
create/POST  
list/GET all  
GET by id  
### Create a Todo

```bash
curl -X POST -H "Content-Type:application/json" http://localhost:3000/api/todos --data '{ "text": "Learn Serverless" }'
```

Example Result:
```bash
{"text":"Learn Serverless","id":"ee6490d0-aa11e6-9ede-afdfa051af86","createdAt":1479138570824,"checked":false,"updatedAt":1479138570824}%
```

### List all Todos

```bash
curl -H "Content-Type:application/json" http://localhost:3000/api/todos
```

Example output:
```bash
[{"text":"Deploy my first service","id":"ac90feaa11e6-9ede-afdfa051af86","checked":true,"updatedAt":1479139961304},{"text":"Learn Serverless","id":"206793aa11e6-9ede-afdfa051af86","createdAt":1479139943241,"checked":false,"updatedAt":1479139943241}]%
```

## Get one Todo

```bash
# Replace the <id> part with a real id from your todos table
curl -H "Content-Type:application/json" http://localhost:3000/api/todos/<id>
```

Example Result:
```bash
{"text":"Learn Serverless","id":"ee6490d0-aa11e6-9ede-afdfa051af86","createdAt":1479138570824,"checked":false,"updatedAt":1479138570824}%
```

## Part 2. - in ui/
```bash
yarn install
```
```bash
yarn start
```
Try:
POST / LIST from interating with UI  
Make sure we are retrieving data from DyanmoDB,  
And posting to it...  

### Not Covered
* Cloudformation deployment issues
* IAM issues
* S3 static content hosting 
