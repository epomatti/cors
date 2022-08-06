const express = require('express')
const app = express()
const port = 3000

require('dotenv').config()
const CORS_ENABLED = process.env.CORS_ENABLED;

app.get('/hello', (req, res) => {
  if (CORS_ENABLED) {
    setCors(res);
  }
  response = {
    msg: `Hello, ${req.query.name}!`
  }
  res.send(response)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const setManualCors = (res) => {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
}