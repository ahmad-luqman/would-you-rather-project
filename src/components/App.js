import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Signin from './Signin';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import QuestionAnsweredList from './QuestionAnsweredList';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        Starter code
        <Signin />
        <LeaderBoard />
        <NewQuestion />
        <QuestionAnsweredList />
      </div>
    )
  }
}

export default connect()(App)
