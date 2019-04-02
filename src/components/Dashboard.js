import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionAnswer from './QuestionAnswer'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
  componentDidMount(){
    if(this.props.authedUser === null)
      this.props.history.push('/')
  }
  state = {
    questionUnanswered: true
  }

  toggleQuestionType = () => {
    this.setState({
      questionUnanswered: !this.state.questionUnanswered
    })
  }

  render() {
    const { answered, unanswered, user } = this.props
    const { questionUnanswered } = this.state
    return (
      <div>
        <nav className='nav'>
          <ul>
            <li
              onClick={this.toggleQuestionType}
              className={ this.state.questionUnanswered ? 'active' : 'unactive'}>
                Unanswered Questions
            </li>
            <li
              onClick={this.toggleQuestionType}
              className={!this.state.questionUnanswered ? 'active' : 'unactive'}>
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
                  <QuestionAnswer key={question.id} question={question}/>
                ))}
            </div>
          </div>
          :
          <div>
            Question Answered List
            <br />
            <div>
              {answered.map(question => (
                  <Link to={`/results/${question.id}`} key={question.id} className="question">
                    {question.author} asks - Would you rather
                    <div>{question.optionOne.text}{user.answers[question.id] === 'optionOne'?' THIS' : ' '}</div>
                    <div>{question.optionTwo.text}{user.answers[question.id] === 'optionTwo'?' THIS' : ' '}</div>
                    <br />
                  </Link>
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
    user
  }
}

export default connect(mapStateToProps)(Dashboard)