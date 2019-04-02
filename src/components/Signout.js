import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { authenticateUser } from '../actions/shared'

class Logout extends Component {
  componentWillMount () {
    this.props.dispatch(authenticateUser(null))
  }
  render () {
    return <Redirect to='/' />
  }
}

export default connect()(Logout)