import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'


class Avatar extends Component {
  render() {
    if (this.props.authedUser === null) {
      return <Redirect
      to={{
        pathname: "/signin",
        state: { referrer: this.props.location.pathname }
      }}
    />
    }
    const { authedUser, users } = this.props
    return (
      <img src={users[authedUser].avatarURL}
           alt='avatar'
           className='avatar' />
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
      authedUser,
      users
  }
}

export default withRouter(connect(mapStateToProps)(Avatar))
