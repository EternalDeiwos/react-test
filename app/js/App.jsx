'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import { grey600 } from 'material-ui/styles/colors'
import injectTapEventPlugin from 'react-tap-event-plugin'

import { View, ViewContainer } from './View.jsx'
import Timer from './Timer.jsx'
import Notification from './Notification.jsx'
import SocialMediaIcons from './SocialMediaIcons.jsx'

import TimerBackground from '../img/timerbg.png'

injectTapEventPlugin()

const style = {
  flavourTextStyle: {
    position: 'absolute',
    top: 30,
    left: -30,
    fontFamily: 'UglyQua',
    fontSize: '36pt'
  },
  timerContainerStyle: {
    backgroundImage: `url('${TimerBackground}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    padding: '150px',
    height: null,
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainerStyle: {
    position: 'absolute',
    bottom: 50,
  },
  buttonTextStyle: {
    fontFamily: 'UglyQua',
    fontSize: '36px',
    padding: '10px'
  },
  buttonStyle: {
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'black',
    height: null,
    width: '300px',
    boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'
  }
}

/**
 * Countdown
 */
class Countdown extends React.Component {

  renderNotification (text) {
    let { props: { query } } = this

    if (query && query.subscribed) {
      console.log(query)
      return <Notification message={text} />
    } else {
      return
    }
  }

  render () {
    let { flavourTextStyle, timerContainerStyle, buttonContainerStyle, buttonTextStyle, buttonStyle } = style

    return (
      <div>
        <div style={timerContainerStyle}>
          <span style={flavourTextStyle}>
            It begins...
          </span>
          <Timer />
          <div style={buttonContainerStyle}>
            <RaisedButton
              label="Sign Up"
              href="/login"
              backgroundColor={grey600}
              labelStyle={buttonTextStyle}
              buttonStyle={buttonStyle}
            />
          </div>
        </div>
        {this.renderNotification('Subscribed')}
      </div>
    )
  }

}

const App = (props) => {
  let { location: { query } } = props

  return (
    <div>
      <View>
        <Countdown query={query} />
      </View>
      <SocialMediaIcons />
    </div>
  )
}

export default App
