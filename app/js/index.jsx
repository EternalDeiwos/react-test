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
    flex: 1,
    backgroundColor: 'powderblue',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderColor: '#ddd',
    borderWidth: '2px',
    width: '500px',
    height: '100%',
    position: 'relative'
  },

  contentContainerStyle: {},
  appStyle: {}
}

const ViewContainer = (props) => {
  let { viewContainerStyle } = style

  return (
    <div style={viewContainerStyle}>
      {props.children}
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
