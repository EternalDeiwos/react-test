'use strict'

/**
 * Dependencies
 * @ignore
 */
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const expressReactView = require('express-react-views')

/**
 * Module Dependencies
 * @ignore
 */
const pkg = require('./package.json')
const cwd = process.cwd()
const OIDC = require('./OIDC')
const SubscriptionManager = require('./SubscriptionManager')

/**
 * App
 * @ignore
 */
const app = express()

/**
 * Setup
 */
const oidc = new OIDC(require('./config.json'))
const subs = new SubscriptionManager()

app.use(express.static('dist'))
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE'],
  preflightContinue: false
}))

app.use((req, res, next) => oidc.init(req, res, next))

/**
 * Login
 */
app.get('/login', function (req, res) {
  res.redirect(req.anvil.authorizationUri())
})

/**
 * Callback
 */
app.get('/login/callback', function (req, res) {
  let { query: params, anvil } = req
  if (params && params.code) {

    // Fetch and decode tokens
    anvil.token({ code: params.code }).then(token => {
        req.tokens = token
        return anvil.userInfo({ token: token.access_token })

      }).then(userinfo => {
        let { tokens } = req
        req.userinfo = userinfo

        return subs.subscribe({ userinfo, tokens })
          ? res.redirect('/?subscribed=true')
          : res.sendStatus(400)

      }).catch(err => {
        res.sendStatus(500)
      })
  }
})

/**
 * Unsubscribe
 */
app.get('/unsubscribe', function (req, res) {
  if (req.query && req.query.email) {
    let { query: { email } } = req

    return subs.unsubscribe(email)
      ? res.redirect('/?unsubscribed=true')
      : res.sendStatus(404)
  } else {
    res.sendStatus(400)
  }
})

/**
 * Listen
 */
app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT || 3000}`)
})
