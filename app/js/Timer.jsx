import moment from 'moment'
//import 'moment-duration-format'
import React from 'react'


class Timer extends React.Component {

  constructor (props) {
    super(props)
    let hvzStartDate = moment("20170621", "YYYYMMDD")
    let dateTimeFormat = "DDD:HH:mm:ss"
    this.state = { 
      timeRemaining : moment(hvzStartDate.diff(moment())).format(dateTimeFormat), 
      target: hvzStartDate, 
      dateTimeFormat: dateTimeFormat,
      interval: 1000  
    }
  }

  tick () {
    let state = this.state
    let difference = state.target.diff(moment())
    this.setState({
      timeRemaining:  moment(difference.valueOf()).format(state.dateTimeFormat),
    })
  }

  componentDidMount () {
    this.interval = setInterval(() => this.tick(), this.state.interval)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    return (
      <div>Countdown: {this.state.timeRemaining}</div>
    )
  }
}

export default Timer
