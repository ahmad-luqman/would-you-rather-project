import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
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
        <Nav />
          <ul className='nav nav-tabs'>
            <li
              onClick={this.setQuestionUnanswered}
              className='nav-item'>
                <div className={`nav-link ${ questionUnanswered ? 'active' : ''}`} href="#">
                  Unanswered Questions
                </div>
            </li>
            <li
              onClick={this.setQuestionAnswered}
              className='nav-item'>
                <div className={`nav-link ${!questionUnanswered ? 'active' : ''}`} href="#">
                  Answered Questions
                </div>
            </li>
          </ul>
        {questionUnanswered?
          <div>
            <div>
              {unanswered.map(question => (
                <div key={question.id} className="question">
                  <img src={users[question.author].avatarURL}
                    alt='avatar'
                    className='avatar' />
                  <p>{question.author} asks - Would you rather</p>
                  <div>{question.optionOne.text}</div>
                  <div>{question.optionTwo.text}</div>
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
            <div>
              {answered.map(question => (
                  <div key={question.id} className="question">
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
  unanswered = Object.values(questions).filter(question =>
    !users[authedUser].answers.hasOwnProperty(question.id)
  ).sort((a, b) => b.timestamp - a.timestamp)

  answered= Object.values(questions).filter(question =>
    users[authedUser].answers.hasOwnProperty(question.id)
  ).sort((a, b) => b.timestamp - a.timestamp)
  return {
    answered,
    unanswered,
    authedUser,
    users,
    user
  }
}

export default connect(mapStateToProps)(Dashboard)