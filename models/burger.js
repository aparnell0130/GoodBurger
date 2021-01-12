const orm = require('../config/orm');

var burger = {
    all: (cb) => {
        orm.all('burgers', (data) => {
            cb(data)
        })
    },
    create: (cols, vals, cb) => {
        orm.create('burgers', cols, vals, (data) => {
            cb(data)
        })
    },
    update: (cols, vals, condition, cb) => {
        orm.update('burgers', cols, vals, condition, (data) => {
            cb(data)
        })
    },
    delete: (condition, cb) => {
        orm.delete('burgers', condition, (data) => {
            cb(data)
        })
    }
}

module.exports = burger