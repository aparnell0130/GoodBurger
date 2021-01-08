const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'aaron',
    password: 'User1234',
    database: 'burgers_db'
});

connection.connect();

connection.query = util.promisify(connection.query)

module.exports = connection