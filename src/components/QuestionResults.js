import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProgressBar from './ProgressBar'
import Nav from './Nav'

class QuestionResults extends Component {
  render () {
    const { id, questions, users } = this.props
    const question = questions[id]
    const totalCount = question.optionOne.votes.length + question.optionTwo.votes.length
    const optionOneCount = question.optionOne.votes.length
    const optionTwoCount = question.optionTwo.votes.length
    const optionOnePercentage = optionOneCount / totalCount * 100
    const optionTwoPercentage = optionTwoCount / totalCount * 100

    const author = question.author
    const authorName = users[author].name
    const avatarURL = users[author].avatarURL

    return (
      <div>
        <Nav />
        <div>
          <h2>Asked by {authorName}:</h2>
          <img src={avatarURL}
                    alt='avatar'
                    className='avatar' />
          <div>Would you rather {question.optionOne.text}?</div>
          <ProgressBar percentage={optionOnePercentage} />
          <div>{optionOneCount} out of {totalCount} votes</div>
          <div>Would you rather {question.optionTwo.text}?</div>
          <ProgressBar percentage={optionTwoPercentage} />
          <div>{optionTwoCount} out of {totalCount} votes</div>
        </div>
      </div>
    )
  }
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