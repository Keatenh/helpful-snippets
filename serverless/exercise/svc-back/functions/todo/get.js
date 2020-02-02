'use strict';

const dynamodb = require('./dynamodb');

module.exports.handler = (event, context, callback) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id,
    },
  };

  // Do something nice:
  console.log("ATTENTION: "+ process.env.VERY_USEFUL)
  if (process.env.VERY_USEFUL == "undefined") {
    // console.log("ATTENTION: VAR MISSING, I QUIT...")
    callback(null, {
          statusCode: 501,
          headers: { 'Content-Type': 'text/plain' },
          body: 'ATTENTION: VAR MISSING, I QUIT...',
        });
    return;
  }
    

    // fetch todo from the database
    dynamodb.get(params, (error, result) => {
      // handle potential errors
      if (error) {
        console.error(error);
        callback(null, {
          statusCode: error.statusCode || 501,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Couldn\'t fetch the todo item.',
        });
        return;
      }

      // create a response
      const response = {
        statusCode: 200,
        body: JSON.stringify(result.Item),
      };
    callback(null, response);
  });
};
