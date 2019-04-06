import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Dashboard extends Component {
  componentDidMount(){
    if(this.props.authedUser === null)
      this.props.history.push('/')
  }
  state = {
    questionUnanswered: true
  }

  setQuestionUnanswered = () => {
    this.setState({
      questionUnanswered: true
    })
  }

  setQuestionAnswered = () => {
    this.setState({
      questionUnanswered: false
    })
  }

  render() {
    const { answered, unanswered, users } = this.props
    const { questionUnanswered } = this.state
    return (
      <div>
        <nav className='nav'>
          <ul>
            <li
              onClick={this.setQuestionUnanswered}
              className={ this.state.questionUnanswered ? 'active btn' : 'unactive'}>
                Unanswered Questions
            </li>
            <li
              onClick={this.setQuestionAnswered}
              className={!this.state.questionUnanswered ? 'active btn' : 'unactive'}>
                Answered Questions
            </li>
          </ul>
        </nav>
        {questionUnanswered?
          <div>
            Question Unanswered List
            <br />
            <div>
              {unanswered.map(question => (
                <div className="question">
                  <img src={users[question.author].avatarURL}
                    alt='avatar'
                    className='avatar' />
                  <p>{question.author} asks - Would you rather</p>
                  <div>{question.optionOne.text}{users[question.author].answers[question.id] === 'optionOne'?' THIS' : ' '}</div>
                  <div>{question.optionTwo.text}{users[question.author].answers[question.id] === 'optionTwo'?' THIS' : ' '}</div>
                  <br />
                  <NavLink to={`/questions/${question.id}`} key={question.id}>
                    Answer Question
                  </NavLink>
                </div>
                ))}
            </div>
          </div>
          :
          <div>
            Question Answered List
            <br />
            <div>
              {answered.map(question => (
                  <div className="question">
                    <img src={users[question.author].avatarURL}
                      alt='avatar'
                      className='avatar' />
                    <p>{question.author} asks - Would you rather</p>
                    <div>{question.optionOne.text}{users[question.author].answers[question.id] === 'optionOne'?' THIS' : ' '}</div>
                    <div>{question.optionTwo.text}{users[question.author].answers[question.id] === 'optionTwo'?' THIS' : ' '}</div>
                    <br />
                    <NavLink to={`/results/${question.id}`} key={question.id}>
                      View Poll
                    </NavLink>
                  </div>
                ))}
            </div>
          </div>
        }
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
    users,
    user
  }
}

export default connect(mapStateToProps)(Dashboard)