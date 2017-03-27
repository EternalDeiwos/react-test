'use strict'

import React from 'react'
import Snackbar from 'material-ui/Snackbar'
import { grey700 } from 'material-ui/styles/colors'

const style = {
  snackbarStyle: {
    backgroundColor: grey700
  }
}

class Notification extends React.Component {

  constructor (props) {
    super(props)
    this.state = { open: true }
  }

  handleClose () {
    this.setState({ open: false })
  }

  render () {
    let { snackbarStyle } = style

    return (
      <Snackbar
        open={this.state.open}
        message={this.props.message}
        autoHideDuration={4000}
        onRequestClose={() => this.handleClose()}
        bodyStyle={snackbarStyle}
      />
    )
  }
}

export default Notification
