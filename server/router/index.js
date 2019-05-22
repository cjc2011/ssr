const router = require('express').Router()
const fs = require("fs");
const axios = require('axios')
const puppeteer = require('puppeteer');

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

router.get('/pdf', async(req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://192.168.1.119:3001/resume`);
  await page.emulateMedia('screen')
  await page.pdf({
    path: 'resume.pdf',
    printBackground: true,
    width: "1400px",
    height: "1600px"
  });
  await browser.close();
  res.json({
    msg: 'ok'
  })
})

module.exports = router
