'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import Timer from './Timer.jsx'
import Notification from './Notification.jsx'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const style = {
  viewContainerStyle: {
    display: 'flex',
    // backgroundColor: 'powderblue',
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

    // backgroundColor: 'red',
    minHeight: '50vh',
    position: 'relative'
  },
}

const ViewContainer = (props) => {
  let { viewContainerStyle, viewParent } = style

  return (
    <div style={viewParent}>
      <div >
        <Card>
          <CardHeader title="Humans vs. Zombies 2017 Mailing List Sign Up" />
          <CardText style={viewContainerStyle}>
            {props.children}
          </CardText>
        </Card>
      </div>
    </div>
  )
}

/**
 * App
 */
class App extends React.Component {

  renderNotification (text) {
    let { props: { location: { query } } } = this

    if (query && query.subscribed) {
      console.log(query)
      return <Notification message={text} />
    } else {
      return
    }
  }

  render () {
    return (
      <ViewContainer>
        <Timer />
        <RaisedButton
          primary={true}
          label="Sign Up"
          href="/login"
        />
        {this.renderNotification('Subscribed')}
      </ViewContainer>
    )
  }

}

export default App
