'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import { View, ViewContainer } from './View.jsx'
import Timer from './Timer.jsx'
import Notification from './Notification.jsx'
import SocialMediaIcons from './SocialMediaIcons.jsx'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

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
    return (
      <Card>
        <CardHeader title="Humans vs. Zombies 2017" />
        <CardText>
          <ViewContainer>
            <Timer />
            <RaisedButton
              primary={true}
              label="Sign Up"
              href="/login"
            />
            {this.renderNotification('Subscribed')}
          </ViewContainer>
        </CardText>
      </Card>
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
