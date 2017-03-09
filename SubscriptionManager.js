'use strict'

/**
 * Dependencies
 * @ignore
 */
const path = require('path')
const fs = require('fs')
const glob = require('glob')
const cwd = process.cwd()

/**
 * Constants
 */
const subsPath = path.join(cwd, 'subs')

/**
 * Subscription Manager
 */
class SubscriptionManager {

  get list () {
    return Object.keys(this.db)
  }

  constructor () {
    this.ensureDirectory()
    this.load()
  }

  ensureDirectory () {
    try {
      let stats = fs.statSync(subsPath)
      if (!stats.isDirectory()) {
        fs.mkdirSync(subsPath, 0o775)
      }
    } catch (err) {
      fs.mkdirSync(subsPath, 0o775)
    }
  }

  load () {
    try {
      let files = glob.sync(path.join(subsPath, '*.json'))
      let data = files.map(file => JSON.parse(fs.readFileSync(file, 'utf8')))
      this.db = data.reduce((prev, data) => {
        let { userinfo } = data
        let { email } = userinfo
        prev[email] = data
        return prev
      }, {})
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }

  subscribe (opts={}) {
    let { tokens, userinfo } = opts

    if (tokens && userinfo) {
      let { email, sub } = userinfo
      let file = path.join(subsPath, `${sub}.json`)

      try {
        fs.writeFileSync(file, JSON.stringify(opts, null, 2), { encoding: 'utf8', mode: 0o664 })
        this.db[email] = opts

        return true
      } catch (err) {
        return false
      }
    }

    return false
  }

  unsubscribe (email) {
    let data = this.db[email]
    if (data) {
      let { userinfo: { sub } } = data

      try {
        fs.unlinkSync(path.join(subsPath, `${sub}.json`))
        return true
      } catch (err) {
        return false
      }

    } else {
      return false
    }
  }

}

/**
 * Export
 * @ignore
 */
module.exports = SubscriptionManager
