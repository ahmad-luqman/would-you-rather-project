import React from 'react'
import { connect } from 'react-redux'
import ProgressBar from './ProgressBar'
import Nav from './Nav'

const QuestionResults = (props) => {
  const { authedUser, id, questions, users } = props
  const question = questions[id]
  const totalCount = question.optionOne.votes.length + question.optionTwo.votes.length
  const optionOneCount = question.optionOne.votes.length
  const optionTwoCount = question.optionTwo.votes.length
  const optionOnePercentage = optionOneCount / totalCount * 100
  const optionTwoPercentage = optionTwoCount / totalCount * 100
  const author = question.author
  const authorName = users[author].name
  const avatarURL = users[author].avatarURL
  const authedUserAnswer = users[authedUser].answers[id]
  return (
    <div>
      <Nav />
      <div className="question">
        <h2>Asked by {authorName}:</h2>
        <img src={avatarURL}
                  alt='avatar'
                  className='avatar' />
        <div className={`result-owner ${authedUserAnswer === 'optionOne'}`}>
          <div>Would you rather {question.optionOne.text}?</div>
          <ProgressBar percentage={optionOnePercentage} />
          <div>{optionOneCount} out of {totalCount} votes</div>
          {authedUserAnswer === 'optionOne' &&
          <div>
            <small className="white-text">Your Answer</small>
          </div>}
        </div>
        <div className={`result-owner ${authedUserAnswer === 'optionTwo'}`}>
          <div>Would you rather {question.optionTwo.text}?</div>
          <ProgressBar percentage={optionTwoPercentage} />
          <div>{optionTwoCount} out of {totalCount} votes</div>
          {authedUserAnswer === 'optionTwo' &&
          <div>
            <small className="white-text">Your Answer</small>
          </div>}
        </div>
      </div>
    </div>
  )
}

function mapStateToProps ({ authedUser, questions, users }, props) {
  const { id } = props.match.params
  return {
    authedUser,
    id,
    questions,
    users
  }
}

export default connect(mapStateToProps)(QuestionResults)