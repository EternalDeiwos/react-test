'use strict'

import moment from 'moment'
import React from 'react'

const timerStyle = {
  textAlign: 'center',
  fontSize: '96px',
  width: '600px',
  padding: '20px',
  margin: '20px',
  borderStyle: 'solid',
  borderWidth: '5px'
}

class Timer extends React.Component {

  constructor (props) {
    super(props)

    let target = moment("2017062405+02:00", "YYYYMMDDHHZZ")
    let format = "DDD:HH:mm:ss"

    this.state = {
      timeRemaining: moment(target.diff(moment())),
      interval: 1000,
      target,
      format
    }
  }

  tick () {
    let { target, format } = this.state
    let difference = target.diff(moment())

    this.setState({
      timeRemaining: moment(difference.valueOf()),
    })
  }

  componentDidMount () {
    let { interval } = this.state
    this.interval = setInterval(() => this.tick(), interval)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    let { timeRemaining, format } = this.state

    return <div style={timerStyle}>{timeRemaining.format(format)}</div>
  }
}

export default Timer
