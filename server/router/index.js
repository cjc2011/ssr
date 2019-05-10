const router = require('express').Router()
const fs = require("fs");
const axios = require('axios')

router.get('/class', (req, res) => {
  axios.get('https://cnodejs.org/api/v1/topics').then( axiosRes => {
    res.json(axiosRes.data)
  })
})

router.get('/', (req, res) => {
  res.json({
    path: '/api'
  })
})

router.get('/:userId/book/:bookId', (req, res) => {
  res.json({
    path: '/:userId/book/:bookId'
  })
})

module.exports = router
