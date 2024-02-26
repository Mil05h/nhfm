const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION,
    endpoint: process.env.ENDPOINT,
});

const db = new AWS.DynamoDB.DocumentClient({convertEmptyValues: true});

module.exports = db;