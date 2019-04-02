import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionResults extends Component {
  render () {
    const { id, questions } = this.props;
    const question = questions[id]
    const totalCount = question.optionOne.votes.length + question.optionTwo.votes.length;
    const optionOneCount = question.optionOne.votes.length;
    const optionTwoCount = question.optionTwo.votes.length;
    return (
      <div>
        <h2>Would you rather </h2>
        <div>{question.optionOne.text}</div>
        <div>{optionOneCount} out of {totalCount} votes</div>
        <div>{question.optionTwo.text}</div>
        <div>{optionTwoCount} out of {totalCount} votes</div>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions }, props) {
  const { id } = props.match.params
  return {
    authedUser,
    id,
    questions
  }
}

export default connect(mapStateToProps)(QuestionResults)