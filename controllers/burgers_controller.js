const express = require('express');
const { restart } = require('nodemon');

const router = express.Router();

const burger = require('../models/burger');

router.get('/', (req, res) => {
    burger.all((data) => {
        const handlebars = {
            burger: data
        }
        console.log(handlebars)
        res.render('index', handlebars)
    })
})

router.post('/api/burgers', (req, res) => {
    burger.create('burger_name', req.body.burger_name, (data) => {
        res.json(data)
    })
})

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

router.delete('api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`
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