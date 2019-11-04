const express = require('express')
const bodyParser = require('body-parser')
const romannumeralScript = require('../src/roman-numeral.js')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/romannumeral', (req, res) => {
  const val = req.query.query
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({ romannumeral: romannumeralScript(Number(val)) }))
})

app.listen(8080, () =>
  console.log('Express server is running on localhost:8080')
)
