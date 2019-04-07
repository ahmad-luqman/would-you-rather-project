import React, { Component } from 'react'
import { handleAnswerQuestion } from '../actions/shared'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Nav from './Nav'
import ErrorPage from './ErrorPage'

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
    const { authedUser, questions, id } = this.props
    const question = questions[id]
    this.props.handleAnswerQuestion( authedUser, question.id, option )
    this.props.history.push(`/results/${question.id}`)
  }
  render () {
    const { id, questions } = this.props;
    const question = questions[id]
    if(question === undefined){
      return(<ErrorPage />);
    }
    return (
      <div>
        <Nav />
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
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleAnswerQuestion: (authedUser, qid, option) =>
    dispatch(handleAnswerQuestion( authedUser, qid, option ))
})

function mapStateToProps ({ authedUser, questions, users }, props) {
  const { id } = props.match!==undefined? props.match.params : undefined
  return {
    authedUser,
    questions,
    users,
    id
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionAnswer))