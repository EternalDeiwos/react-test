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
import TextField from 'material-ui/TextField'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const style = {
  viewContainerStyle: {
    display: 'flex',
    backgroundColor: 'powderblue',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative'
  },

  viewParent:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    backgroundColor: 'red',
    minHeight: '50vh',
    position: 'relative'
  },

  contentContainerStyle: {},
  appStyle: {}
}

const ViewContainer = (props) => {
  let { viewContainerStyle, viewParent } = style

  return (
    <div style={viewParent}>
      <div style={viewContainerStyle}>
        {props.children}
      </div>
    </div>
  )
}

/**
 * App
 */
class App extends React.Component {

  render () {
    let { contentContainerStyle, appStyle } = style

    return (
      <ViewContainer>
        <h1>Test!</h1>
        <RaisedButton
          label="Sign Up"
          href="/login"
        />
        <Timer />
      </ViewContainer>
    )
  }

}

/**
 * DOM
 * @ignore
 */
ReactDOM.render(
  <MuiThemeProvider style={{flex: 1}}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('app')
)
