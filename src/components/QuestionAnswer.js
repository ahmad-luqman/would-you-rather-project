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
      <div>
        <h1>Would You Rather </h1>
        <form onSubmit={this.answerQuestion}>
          <p>Would You Rather:</p>
          <div>
            <input
              type="radio"
              id="optionOne"
              name="wouldyourather"
              value="optionOne"
              onChange={(e) => this.changeOption(e.target.value)}
              checked />
            <label htmlFor="optionOne">{question.optionOne.text}</label>
          </div>
          <div>
            <input
              type="radio"
              id="optionTwo"
              name="wouldyourather"
              value="optionTwo"
              onChange={(e) => this.changeOption(e.target.value)} />
            <label htmlFor="optionTwo">{question.optionTwo.text}</label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(QuestionAnswer)