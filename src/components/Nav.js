import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
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
            Sign out
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}