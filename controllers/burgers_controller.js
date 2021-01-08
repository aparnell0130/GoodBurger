const express = require('express');

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
