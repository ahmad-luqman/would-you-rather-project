import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionAnswer from './QuestionAnswer'
import { Link } from 'react-router-dom'

class QuestionAnsweredList extends Component {
  componentDidMount(){
    if(this.props.authedUser === null)
      this.props.history.push('/')
  }
  render() {
    const { answered, unanswered, user } = this.props
    return (
      <div>
        Question Unanswered List
        <br />
        <div>
          {unanswered.map(question => (
              <QuestionAnswer key={question.id} question={question}/>
            ))}
        </div>
        Question Answered List
        <br />
        <div>
          {answered.map(question => (
              <Link to={`/results/${question.id}`} key={question.id}>
                {question.author} asks - Would you rather
                <div>{question.optionOne.text}{user.answers[question.id] === 'optionOne'?' THIS' : ' '}</div>
                <div>{question.optionTwo.text}{user.answers[question.id] === 'optionTwo'?' THIS' : ' '}</div>
                <br />
              </Link>
            ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ questions, users, authedUser }) {
  let user
  let answered = []
  let unanswered = []

  if (authedUser !== null) {
    user = users[authedUser]
  }
  // eslint-disable-next-line array-callback-return
  Object.values(questions).filter(question => {
    if (user.answers.hasOwnProperty(question.id)) {
      answered.push(question)
    } else {
      unanswered.push(question)
    }
  })
  return {
    answered,
    unanswered,
    authedUser,
    user
  }
}

export default connect(mapStateToProps)(QuestionAnsweredList)