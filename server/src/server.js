const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

// Loads CORS environment variables
require('dotenv').config()
const CORS = process.env.CORS;

// Enable Express CORS if configured
if (CORS === "express") {
  app.use(cors())
}

// Test method
app.get('/hello', (req, res) => {
  if (CORS === "manual") {
    setCorsManually(res);
  }
  response = {
    msg: `Hello, ${req.query.name}!`
  }
  res.send(response)
})

// Server start
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const setCorsManually = (res) => {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
}