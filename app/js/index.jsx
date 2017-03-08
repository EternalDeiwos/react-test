'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Timer from './Timer.jsx'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

/**
 * App
 */
class App extends React.Component {

  render () {
    return (
      <Card>
        <CardHeader title="Hello World!" subtitle="Test" />
        <CardText>
          <h1 style={{ fontFamily: 'Roboto' }}>Hello { this.props.name }!</h1>
          <Timer />
        </CardText>
      </Card>
    )
  }

}

/**
 * DOM
 * @ignore
 */
ReactDOM.render(
  <MuiThemeProvider>
    <App name="Greg" />
  </MuiThemeProvider>,
  document.getElementById('app')
)
