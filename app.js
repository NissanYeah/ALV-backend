require('dotenv').config();
const express = require('express');
const app = express()
const bodyParser = require('body-parser')

const corsOptions = process.env.NODE_ENV == "development" ? 
{
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
} : {
  "origin": ['http://avl-exam.surge.sh/'],
  "optionsSuccessStatus": 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


app.use(bodyParser.json());
app.use('/mail', cors(corsOptions),require('./routes/mail'))

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`)
})
