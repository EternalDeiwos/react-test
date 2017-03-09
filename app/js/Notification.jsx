'use strict'

import React from 'react'
import Snackbar from 'material-ui/Snackbar'

class Notification extends React.Component {

  constructor (props) {
    super(props)
    this.state = { open: true }
  }

  handleClose () {
    this.setState({ open: false })
  }

  render () {
    return (
      <Snackbar
        open={this.state.open}
        message={this.props.message}
        autoHideDuration={4000}
        onRequestClose={() => this.handleClose()}
      />
    )
  }
}

export default Notification
