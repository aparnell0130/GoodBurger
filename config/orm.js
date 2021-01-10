const connection = require('./connection');

const orm = {
    all: (tableInput, cb) => {
        const queryString = `SELECT * FROM ${tableInput} ;`
        connection.query(queryString, (err, data) => {
            if (err) {
                throw err;
            }
            cb(data);
        })
    },
    create: (tableInput, cols, vals, cb) => {
        const queryString = `INSERT INTO ${tableInput} (${cols.toString()}) VALUES (?)`
        connection.query(queryString, vals, (err, data) => {
            if (err) {
                throw err
            }
            cb(data)
        })
    }
}

module.exports = orm