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
        <div className="text-center font-weight-bold">Create New Question</div>
        <br />
        <div className="">Complete the question.</div>
        <br />
        <div className="">Would you rather ..</div>
        <form className="" onSubmit={this.addQuestion}>
          <input name="firstQuestion" type="text" className="form-control" />
          <br />
          <span className="text-center font-italic">OR</span>
          <input name="secondQuestion" type="text"  className="form-control" />
          <br />
          <input className="btn btn-primary" type="submit" />
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
