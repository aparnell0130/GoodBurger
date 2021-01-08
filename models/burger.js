const orm = require('../config/orm');

var burger = {
    all: (cb) => {
        orm.all('burgers', (data) => {
            cb(data)
        })
    }
}

module.exports = burger