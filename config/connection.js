// connection to mysql
const mysql = require('mysql');
require('dotenv').config()

let connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '',
        database: 'burgers_db'
    })
};

connection.connect();

module.exports = connection