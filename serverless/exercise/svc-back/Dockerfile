FROM alpine:3.8

RUN apk add --update curl && \
    apk -Uuv add git && \
    rm -rf /var/cache/apk/*

RUN apk add nodejs=8.14.0-r0 nodejs-npm=8.14.0-r0 && \
    apk upgrade

RUN mkdir app && \
    cd app && \
    npm init -y && \
    npm install aws-sdk@2.449.0 && \
    npm install -g serverless@1.37.0 && \
    npm install serverless-offline@4.10.0 && \
    npm install serverless-dynamodb-local@0.2.35