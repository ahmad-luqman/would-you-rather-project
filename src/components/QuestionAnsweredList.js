import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionAnsweredList extends Component {
  render() {
    const { answered, unanswered, authedUser, user } = this.props
    return (
      <div>
        Question Unanswered List
        <br />
        <div>
          {unanswered.map(question => (
              <div key={question.id}>
                {question.author} asks - Would you rather
                <div>{question.optionOne.text}</div>
                <div>{question.optionTwo.text}</div>
                <br />
              </div>
            ))}
        </div>
        Question Answered List
        <br />
        <div>
          {answered.map(question => (
              <div key={question.id}>
                {question.author} asks - Would you rather
                <div>{question.optionOne.text}{user.answers[question.id] === 'optionOne'?' THIS' : ' '}</div>
                <div>{question.optionTwo.text}{user.answers[question.id] === 'optionTwo'?' THIS' : ' '}</div>
                <br />
              </div>
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
  //hardcode TODO fix 
  authedUser = 'tylermcginnis'
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