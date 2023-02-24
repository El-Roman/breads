// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker')
const bakerSeedData = require('../models/baker_seed')

// export
module.exports = baker

baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})

