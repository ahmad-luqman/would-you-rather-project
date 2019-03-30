import React, { Component } from 'react'

class QuestionAnswer extends Component {
  render () {
    const { question } = this.props;
    return (
      <div>
        <h1>Would You Rather </h1>
        <form>
          <p>Would You Rather:</p>
          <div>
            <input type="radio" id="optionOne" name="wouldyourather" value="optionOne" checked />
            <label htmlFor="optionOne">{question.optionOne.text}</label>
          </div>
          <div>
            <input type="radio" id="optionTwo" name="wouldyourather" value="optionTwo" />
            <label htmlFor="optionTwo">{question.optionTwo.text}</label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default QuestionAnswer