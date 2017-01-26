'use strict'

let express = require('express')
let app = express()

app.use(express.static('src'))

app.listen(1337, function () {
  console.log('Server started: http://%s:%s', 'localhost', this.address().port)
})

// Handle the error when using pipe operator to open the page in the browser
// upon starting the server
process.stdout.on('error', function (err) {
  if (err.code === 'EPIPE') {
    console.warn() // do nothing
  }
})
