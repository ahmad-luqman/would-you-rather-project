import React, { Component } from 'react'
import { connect } from 'react-redux'

class Avatar extends Component {
  render() {
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

export default connect(mapStateToProps)(Avatar)
