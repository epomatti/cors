const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
  
  res.send(`Hello, ${req.query.name}!`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const setCors = (res) => {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
}