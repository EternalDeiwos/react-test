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
 * Setup
 */
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', path.join(cwd, 'app', 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', expressReactView.createEngine({ beautify: true }))

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

app.get('/hello', function (req, res) {
  res.render('index', { name: 'Greg' })
})

/**
 * Listen
 */
app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT || 3000}`)
})
