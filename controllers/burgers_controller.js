// require packages and files
const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

// get route to display data from the database
router.get('/', (req, res) => {
    burger.all((data) => {
        const handlebars = {
            burger: data
        }
        console.log(handlebars)
        res.render('index', handlebars)
    })
})

// post route to get users inserted data
router.post('/api/burgers', (req, res) => {
    burger.create('burger_name', req.body.burger_name, (data) => {
        res.json(data)
    })
})

// put route to update users selected data
router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`
    console.log(condition)
    console.log(req.body.devoured)
    burger.update("devoured", req.body.devoured, condition, (data) => {
        if (data.affectedRows === 0) {
            return res.status(404).end()
        }
        else {
            res.status(200).end()
        }
    })
})

// delete route to delete user selected data
router.delete('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`
    console.log(condition)
    burger.delete(condition, (data) => {
        if (data.affectedRows === 0) {
            return res.status(404).end()
        }
        else {
            res.status(200).end()
        }
    })
})
module.exports = router