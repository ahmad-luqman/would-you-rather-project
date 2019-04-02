import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dashboard from './Dashboard';

class Home extends Component {
  render() {
    return (
      <Dashboard />
    )
  }
}

export default connect()(Home)