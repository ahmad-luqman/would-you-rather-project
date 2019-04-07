import React, { Component } from 'react'
import { addQuestionAction } from '../actions/shared'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Nav from './Nav'

class NewQuestion extends Component {
  addQuestion = (e) => {
    e.preventDefault()
    let optOne = e.target[0].value
    let optTwo = e.target[1].value
    this.props.addQuestionAction(this.props.authedUser, optOne, optTwo)
    this.props.history.push("/dashboard")
  }
  render() {
    return (
      <div>
        <Nav />
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
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addQuestionAction: (authedUser, optionOne, optionTwo) =>
    dispatch(addQuestionAction(authedUser, optionOne, optionTwo))
})

function mapStateToProps ({ authedUser, questions }) {
  return {
      authedUser,
      questions,
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewQuestion))
