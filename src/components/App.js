import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Signin from './Signin'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import QuestionAnswer from './QuestionAnswer'
import QuestionResults from './QuestionResults'
import Signout from './Signout'
import ErrorPage from './ErrorPage';


class App extends Component {
  componentDidMount(){
    this.props.initialData()
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            { <div>
                <Switch>
                  <Route path='/' exact component={Signin} />
                  <Route path='/signin' exact component={Signin} />
                  <Route path='/leaderboard' exact component={LeaderBoard} />
                  <Route path='/add' exact component={NewQuestion} />
                  <Route path='/dashboard' exact component={Dashboard} />
                  <Route path='/questions/:id' exact component={QuestionAnswer} />
                  <Route path='/results/:id' exact component={QuestionResults} />
                  <Route path='/signout' exact component={Signout} />
                  <Route path='*' component={ErrorPage} />
                </Switch>
              </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  initialData: () => dispatch(handleInitialData())
})

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
