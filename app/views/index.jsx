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
      <div>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
        <h1 style={{ fontFamily: 'Roboto' }}>Hello { this.props.name }!</h1>
      </div>
    )
  }

}

/**
 * Export
 * @ignore
 */
module.exports = App
