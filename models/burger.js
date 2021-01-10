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
    }
}

module.exports = burger