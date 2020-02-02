console.log('Loading function');

exports.handler = async (event, context, callback) => {
    var response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
        },
        body: process.env.HEY,
    };
    callback(null, response);
};