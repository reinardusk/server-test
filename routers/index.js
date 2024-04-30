const express = require('express')
const router = express.Router()
const users = require('./users')

router.get('/', (req, res) => {
  res.send('Hello this is API /GET!')
})

router.use('/users', users)

module.exports = router