'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Timer from './Timer.jsx'

/**
 * App
 */
class App extends React.Component {

  render () {
    return (
      <div>
        <h1 style={{ fontFamily: 'Roboto' }}>Hello { this.props.name }!</h1>
        <Timer />
      </div>
    )
  }

}

/**
 * DOM
 * @ignore
 */
ReactDOM.render(
  <App name="Greg" />,
  document.getElementById('app')
)
