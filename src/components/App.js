import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Signin from './Signin'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import QuestionAnsweredList from './QuestionAnsweredList'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import QuestionResults from './QuestionResults'
import Signout from './Signout'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            {this.props.authedUser===null? 
              (<Signin />) :
              <div>
                <Nav />
                <Route path='/' exact component={Signin} />
                <Route path='/leaderboard' component={LeaderBoard} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/dashboard' component={QuestionAnsweredList} />
                <Route path='/results/:id' exact component={QuestionResults} />
                <Route exact path='/signout' component={Signout} />

                <div>
                  <LeaderBoard />
                  <NewQuestion />
                  <QuestionAnsweredList />
                </div>
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
