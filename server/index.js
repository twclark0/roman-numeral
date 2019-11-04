const express = require('express')
const romannumeralScript = require('../src/roman-numeral.js')

const app = express()
app.get('/romannumeral', (req, res) => {
  const val = req.query.query
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({ romannumeral: romannumeralScript(val) }))
})

app.listen(8080, () =>
  console.log('Express server is running on localhost:8080')
)
