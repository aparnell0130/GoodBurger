// require orm functions
const orm = require('../config/orm');

var burger = {
    // pass data to the orm function to view data in the database
    all: (cb) => {
        orm.all('burgers', (data) => {
            cb(data)
        })
    },
    // pass data to the orm function to create data in the data base
    create: (cols, vals, cb) => {
        orm.create('burgers', cols, vals, (data) => {
            cb(data)
        })
    },
    // pass data to the orm function to update data in the database
    update: (cols, vals, condition, cb) => {
        orm.update('burgers', cols, vals, condition, (data) => {
            cb(data)
        })
    },
    // pass data to the orm function to delete data to the data base
    delete: (condition, cb) => {
        orm.delete('burgers', condition, (data) => {
            cb(data)
        })
    }
}

module.exports = burger