const express = require('express')
const router = express.Router()
const pointController = require('../controllers/point.controller')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', pointController.onGetAll)
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router