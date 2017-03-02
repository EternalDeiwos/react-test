'use strict'

/**
 * Dependencies
 * @ignore
 */
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')

/**
 * Module Dependencies
 * @ignore
 */
const pkg = require('./package.json')

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

/**
 * Listen
 */
app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT || 3000}`)
})
