import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { authenticateUser } from '../actions/shared'

function Logout (props) {
  props.logout()
  
  return <Redirect to='/' />
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(authenticateUser(null))
})

export default connect(null, mapDispatchToProps)(Logout)