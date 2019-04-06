import React, { Component } from 'react'
import { withRouter, NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Avatar from './Avatar'

class Nav extends Component {
  render(){
    if (this.props.authedUser === null) {
      return <Redirect to='/signin' />
    }
    return (
    <nav className='navbar navbar-expand-lg navbar navbar-dark bg-primary'>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to='/dashboard' exact activeClassName='active' className="nav-link">
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/add' activeClassName='active' className="nav-link">
            Add New Question
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/leaderboard' activeClassName='active' className="nav-link">
            Leaderboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/signout' activeClassName='active' className="nav-link">
            <Avatar />
            Sign out
          </NavLink>
        </li>
      </ul>
    </nav>)
  }
}

function mapStateToProps ({ users, authedUser }) {
  if(users[authedUser] !== undefined ){
      return {
          authedUser: authedUser,
          name: users[authedUser].name,
          avatar: users[authedUser].avatarURL,
      } 
  }
  return {authedUser: ""}
}
export default withRouter(connect(mapStateToProps)(Nav))