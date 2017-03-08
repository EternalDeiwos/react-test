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
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  appStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

/**
 * App
 */
class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = { email: '' }
  }

  updateEmail (email) {
    this.setState({ email })
  }

  test () {
    let { email } = this.state
    alert(email)
  }

  render () {
    let { contentContainerStyle, appStyle } = style

    return (
      <div style={appStyle}>
        <AppBar title="HvZ Sign Up" />
        <Card>
          <CardText style={contentContainerStyle}>
            <h1 style={{ fontFamily: 'Roboto' }}>Hello { this.props.name }!</h1>
            <TextField
              onChange={(ev, email) => this.updateEmail(email)}
              errorText="This field is required and must be a valid email address."
              floatingLabelText="Email"
            />
            <RaisedButton
              label="Test"
              onClick={() => this.test()}
            />
            <Timer />
          </CardText>
        </Card>
      </div>
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
