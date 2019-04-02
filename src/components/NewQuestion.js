import React, { Component } from 'react'
import { addQuestionAction } from '../actions/shared'
import { connect } from 'react-redux'

class NewQuestion extends Component {
  addQuestion = (e) => {
    e.preventDefault()
    let optOne = e.target[0].value
    let optTwo = e.target[1].value
    this.props.dispatch(addQuestionAction(this.props.authedUser, optOne, optTwo))
  }
  render() {
    return (
      <div className="question">
        <div className="question">Create New Question</div>
        <div className="question">Complete the question:</div>
        <div className="question">Would you rather ..</div>
        <form className="question" onSubmit={this.addQuestion}>
          <input name="firstQuestion" type="text" />
          <br />
          <div>OR</div>
          <input name="secondQuestion" type="text" />
          <br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions }) {
  return {
      authedUser,
      questions,
  }
}

export default connect(mapStateToProps)(NewQuestion)
