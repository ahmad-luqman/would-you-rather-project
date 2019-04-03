import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Signin from './Signin'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import QuestionResults from './QuestionResults'
import Signout from './Signout'
import ErrorPage from './ErrorPage';


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
              (
                <Switch>
                  <Route path='/' exact component={Signin} />
                  <Route path='*' component={ErrorPage} />
                </Switch>
              ) :
              <div>
                <Nav />
                {this.props.loading === true
                 ? null
                 : <Switch>
                     <Route path='/' exact component={Signin} />
                     <Route path='/leaderboard' exact component={LeaderBoard} />
                     <Route path='/add' exact component={NewQuestion} />
                     <Route path='/dashboard' exact component={Dashboard} />
                     <Route path='/results/:id' exact component={QuestionResults} />
                     <Route path='/signout' exact component={Signout} />
                     <Route path='*' component={ErrorPage} />
                  </Switch>
                }
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
