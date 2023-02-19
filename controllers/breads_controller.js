const express = require('express')
const bread_router = express.Router()
const Bread = require('../models/bread.js')

// INDEX
bread_router.get('/', (req, res) => {
    Bread.find()
        .then(foundBreads => {
            res.render('index',
                {
                    breads: foundBreads,
                    title: 'Index Page'
                }
            )
        })

})


// NEW
bread_router.get('/new', (req, res) => {
    res.render('new')
})

// EDIT
bread_router.get('/:indexArray/edit', (req, res) => {
    res.render('edit', {
        bread: Bread[req.params.indexArray],
        index: req.params.indexArray
    })
})


// SHOW
bread_router.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
        .then(foundBread => {
            res.render('show', {
                bread: foundBread
            })
        })
        .catch(err => {
            res.send('404')
        })
})


// CREATE
bread_router.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = undefined
    }
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.create(req.body)
    res.redirect('/breads')
})

// DELETE
bread_router.delete('/:indexArray', (req, res) => {
    Bread.splice(req.params.indexArray, 1)
    res.status(303).redirect('/breads')
})

// UPDATE
bread_router.put('/:arrayIndex', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread[req.params.arrayIndex] = req.body
    res.redirect(`/breads/${req.params.arrayIndex}`)
})








module.exports = bread_router
