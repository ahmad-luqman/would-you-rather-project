import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionAnsweredList from './QuestionAnsweredList';

class Home extends Component {
  render() {
    return (
      <QuestionAnsweredList />
    )
  }
}

export default connect()(Home)