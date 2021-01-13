// require connection
const connection = require('./connection');

// objects of orm functions
const orm = {
    // get all data
    all: (tableInput, cb) => {
        const queryString = `SELECT * FROM ${tableInput} ;`
        connection.query(queryString, (err, data) => {
            if (err) {
                throw err;
            }
            cb(data);
        })
    },
    // add data to the database based on what the user inserts
    create: (tableInput, cols, vals, cb) => {
        const queryString = `INSERT INTO ${tableInput} (${cols.toString()}) VALUES (?)`
        connection.query(queryString, vals, (err, data) => {
            if (err) {
                throw err
            }
            cb(data)
        })
    },
    // update data in the database based on what the user selects
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
    // delete data from the database based on users choice
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