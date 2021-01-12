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
    },
    update: (tableInput, cols, vals, condition, cb) => {
        const queryString = `UPDATE ${tableInput} SET ${cols} = ${vals} WHERE ${condition}`
        console.log(queryString)
        connection.query(queryString, (err, data) => {
            if (err) {
                throw err
            }
            cb(data)
        })
    },
    delete: (tableInput, condition, cb) => {
        const queryString = `DELETE FROM ${tableInput} WHERE ${condition}`

        connection.query(queryString, (err, data) => {
            if (err) {
                throw err
            }
            cb(data)
        })
    }
}

module.exports = orm