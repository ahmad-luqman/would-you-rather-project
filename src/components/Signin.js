import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authenticateUser } from '../actions/shared'
import { withRouter, Redirect } from 'react-router-dom'


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
    this.props.login(this.state.selectedUser)
  }
  render () {
    const { authedUser, users } = this.props;
    const { selectedUser } = this.state
    return (
      (authedUser) ?
      <Redirect
            to={{
                pathname: (this.props.location.state) ? this.props.location.state.referrer : "/dashboard"
            }}
        />
        :
        <div className="row ">
        <form onSubmit={this.authenticate} className="col-md-12">
          <h1 className="display-4 jumbotron bg-white text-center">
            Would<br />You<br/>Rather
          </h1>
          <select className="offset-md-3 col-md-5 custom-select"
            value={selectedUser}
            onChange={this.handleChange}>
            <option key="" value = "">
              Choose a User
            </option>
            {users && Object.keys(users).map(user => (
              <option key={user} value={user} className="dropdown-item">
                {users[user].name}
              </option>
              ))
            }
          </select>
          <button className="col-md-1 btn btn-primary ml-1"
            disabled={selectedUser === ''}
            type="submit">
            Sign In
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(authenticateUser(user))
})

function mapStateToProps({authedUser, users}) {
  //const userProps = Object.keys(users)
  return {
    users: users,
    authedUser
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signin))