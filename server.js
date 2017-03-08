'use strict'

/**
 * Dependencies
 * @ignore
 */
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const expressReactView = require('express-react-views')
const yuno = require('yunodb')

/**
 * Module Dependencies
 * @ignore
 */
const pkg = require('./package.json')
const cwd = process.cwd()

/**
 * App
 * @ignore
 */
const app = express()

/**
 * Database
 * @ignore
 */
let db = yuno({
  location: './db',
  keyField: 'email',
  indexMap: ['text']
}, (err, dbHandle) => {
  db = dbHandle
})

/**
 * Setup
 */
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', path.join(cwd, 'app', 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', expressReactView.createEngine({ beautify: true }))

/**
 * MaterialUI Tap Event Plugin Injection
 */
require('react-tap-event-plugin')()

/**
 * Service Intro
 */
app.get('/', function (req, res) {
  res.status(200).json({
    [pkg.name]: 'Welcome',
    description: pkg.description,
    version: pkg.version
  })
})

// app.get('/hello', function (req, res) {
//   res.render('index', { name: 'Greg' })
// })
app.post('/subscribe', function (req, res) {
  let { body } = req
  res.set({
    'Access-Control-Allow-Origin': '*'
  })
  console.log(body)

  if (!body) {
    res.sendStatus(400)
  } else {
    let { email } = body

    if (!email) {
      res.sendStatus(400)
    } else {
      db.add({ email }, err => {
        if (err) {
          res.sendStatus(400)
        } else {
          res.status(200).json(body)
        }
      })
    }
  }
})

/**
 * Listen
 */
app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT || 3000}`)
})
