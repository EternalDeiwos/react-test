import moment from 'moment'
//import 'moment-duration-format'
import React from 'react'


class Timer extends React.Component {

  constructor (props) {
    super(props)

    let target = moment("20170621", "YYYYMMDD")
    let format = "DDD:HH:mm:ss"

    this.state = {
      timeRemaining : moment(target.diff(moment())).format(format),
      interval: 1000,
      target,
      format
    }
  }

  tick () {
    let { target, format } = this.state
    let difference = target.diff(moment())

    this.setState({
      timeRemaining: moment(difference.valueOf()).format(format),
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
    let { timeRemaining } = this.state

    return (
      <div>Countdown: {timeRemaining}</div>
    )
  }
}

export default Timer
