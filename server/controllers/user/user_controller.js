const db = require(`../db/db_helper.js`);
const {v4: uuid} = require('uuid');

class UserController {
    constructor() {
        this.tableName = 'users';
    }

    async findByID(UserID) {
        const params = {
            TableName: this.tableName,
            Key: {
                UserID,
            },
        };

        return await db.get(params).promise();
    }

    async create(data) {
        const params = {
            TableName: this.tableName,
            Item: {
                UserID: uuid(),
                Username: data.Username,
            },
        };

        await db.put(params).promise();

        return params.Item;
    }

    async update(UserID, data) {
        const params = {
            TableName: this.tableName,
            Key: {
                UserID: UserID
            },
            UpdateExpression: `set #Username = :Username`,
            ExpressionAttributeNames: {
                '#Username': `Username`,
            },
            ExpressionAttributeValues: {
                ":Username": data.Username,
            },
            ReturnValues: `UPDATED_NEW`,
        };

        const update = await db.update(params).promise();

        return update.Attributes;
    }

    async deleteByID(UserID) {
        const params = {
            TableName: this.tableName,
            Key: {
                UserID,
            },
        };

        return await db.delete(params).promise();
    }
}

module.exports = new UserController();