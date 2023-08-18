const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080

require('dotenv').config();
const MODE = process.env.CORS_MODE;

if (MODE === "express") {
  app.use(cors());
} else if (MODE === "express_with_options") {
  const ORIGIN = process.env.CORS_MODE_OPTION_ORIGIN;
  var options = {
    origin: ORIGIN,
    optionsSuccessStatus: 200
  }
  app.use(cors(options));
}

app.get('/hello', (req, res) => {
  if (MODE === "manual") {
    setCorsManually(res);
  }
  response = {
    msg: `Hello, ${req.query.name}!`
  }
  res.send(response);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

const setCorsManually = (res) => {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
}
