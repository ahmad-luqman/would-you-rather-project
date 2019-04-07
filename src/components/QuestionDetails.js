import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import QuestionResults from './QuestionResults'
import QuestionAnswer from './QuestionAnswer'

class QuestionDetails extends Component {
  render () {
    const { authedUser, questions, users, id } = this.props;

    if (authedUser === null) {
      return <Redirect
      to={{
        pathname: "/signin",
        state: { referrer: this.props.location.pathname }
      }}
    />
    }

    const question = questions[id]

    if(question === undefined){
      return(<ErrorPage />);
    }

    if (users[authedUser].answers.hasOwnProperty(question.id)) {
      return (
        <QuestionResults id={question.id} />
      )
    }
    else {
      return (
        <QuestionAnswer id={question.id} />
      )
    }

  }
}

function mapStateToProps ({ authedUser, questions, users }, props) {
  const { id } = props.match!==undefined? props.match.params : undefined
  return {
    authedUser,
    questions,
    users,
    id
  }
}

export default withRouter(connect(mapStateToProps)(QuestionDetails))