import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'


class Avatar extends Component {
  render() {
    const { authedUser, users } = this.props
    if (authedUser === null) {
      return <Redirect
      to={{
        pathname: "/signin",
        state: { referrer: this.props.location.pathname }
      }}
    />
    }
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
