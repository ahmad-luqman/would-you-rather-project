import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authenticateUser } from '../actions/shared'

class Signin extends Component {
  state={
    selectedUser:''
  }
  handleChange = (e) => {
    const user = e.target.value
    this.setState({
      selectedUser: user
    });
  }
  authenticate = (e) => {
    this.props.dispatch(authenticateUser(this.state.selectedUser))
  }
  render () {
    const { users } = this.props;
    const { selectedUser } = this.state
    return (
      <div>
        <form onSubmit={this.authenticate}>
          <select
            value={selectedUser}
            onChange={this.handleChange}>
            <option key="" value = "">
              Choose a User
            </option>
            {users && Object.keys(users).map(user => (
              <option key={user} value={user}>
                {users[user].name}
              </option>
              ))
            }
          </select>
          <button
            disabled={selectedUser === ''}
            type="submit">
            Sign In
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({authedUser, users}) {
  //const userProps = Object.keys(users)
  return {
    users: users,
    authedUser
  }
}

export default connect(mapStateToProps)(Signin)