const express = require('express')
const bread_router = express.Router()
const Bread = require('../models/bread.js')

// INDEX
bread_router.get('/', (req, res) => {
    res.render('Index',
        {
            "breads": Bread
        }
    )
    // res.send(Bread)
})


//SHOW
bread_router.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
})

module.exports = bread_router
