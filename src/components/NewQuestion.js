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
      <div>
        <div>Create New Question</div>
        <div>Complete the question:</div>
        <div>Would you rather ..</div>
        <form onSubmit={this.addQuestion}>
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
