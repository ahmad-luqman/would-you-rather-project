import React, { Component } from 'react'
import { handleAnswerQuestion } from '../actions/shared'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class QuestionAnswer extends Component {
  state = {
    option: 'optionOne'
  }
  changeOption = (value) => {
    this.setState({
      option: value
    })
  }
  answerQuestion = () => {
    const { option } = this.state
    const { authedUser, question } = this.props
    this.props.dispatch(handleAnswerQuestion( authedUser, question.id, option ))
    this.props.history.push(`/results/${question.id}`)
  }
  render () {
    const { question } = this.props;
    return (
      <div className="question">
        <h4 className="text-center">Would You Rather </h4>
        <br />
        <form>
          <div>
            <input
              type="radio"
              name="wouldyourather"
              value="optionOne"
              onChange={(e) => this.changeOption(e.target.value)}
              checked />
            {question.optionOne.text}
          </div>
          <div>
            <input
              type="radio"
              name="wouldyourather"
              value="optionTwo"
              onChange={(e) => this.changeOption(e.target.value)} />
            {question.optionTwo.text}
          </div>
          <br />
        </form>
        <button onClick={this.answerQuestion} className="btn btn-primary">
            Submit
          </button>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users }) {
  return {
    authedUser,
    questions,
    users
  }
}

export default withRouter(connect(mapStateToProps)(QuestionAnswer))