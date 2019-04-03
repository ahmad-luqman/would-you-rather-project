import React, { Component } from 'react'
import { handleAnswerQuestion } from '../actions/shared'
import { connect } from 'react-redux'

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
  }
  render () {
    const { question } = this.props;
    return (
      <div className="question">
        <h3>Would You Rather </h3>
        <form>
          <p>Would You Rather:</p>
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
        </form>
        <button onClick={this.answerQuestion}>
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

export default connect(mapStateToProps)(QuestionAnswer)