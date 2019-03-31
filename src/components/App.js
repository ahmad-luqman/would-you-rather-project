import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Signin from './Signin'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import QuestionAnsweredList from './QuestionAnsweredList'
import LoadingBar from 'react-redux-loading'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <div>
            <LoadingBar />
            {this.props.authedUser===null? 
              (<Signin />) :
              <div>
                <LeaderBoard />
                <NewQuestion />
                <QuestionAnsweredList />
              </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
