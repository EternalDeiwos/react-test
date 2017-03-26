'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App.jsx'

require('../css/EndlessBlue.css')
require('../css/MeathFLF.css')
require('../css/UglyQua.css')
require('../css/app.css')

/**
 * DOM
 * @ignore
 */
ReactDOM.render(
  <MuiThemeProvider style={{flex: 1}}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
    </Router>
  </MuiThemeProvider>,
  document.getElementById('app')
)
