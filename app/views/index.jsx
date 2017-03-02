'use strict'

/**
 * Dependencies
 * @ignore
 */
const React = require('react')
const { Component } = React

/**
 * App
 */
class App extends Component {

  render () {
    return (
      <h1>Hello { this.props.name }!</h1>
    )
  }

}

/**
 * Export
 * @ignore
 */
module.exports = App
