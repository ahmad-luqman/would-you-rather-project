import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
    render() {
      const { leaderboard } = this.props
      return (
          <div> 
              <br />
              <table className="table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th></th>
                    <th>Name</th>
                    <th>Questions</th>
                    <th>Answers</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  { leaderboard !== undefined && leaderboard.map((user, key) => (
                    <tr key={user.id}>
                      <td>{key + 1}</td>
                      <td>
                        <img src={user.avatarURL}
                             alt='avatar'
                             className='avatar' />
                      </td>
                      <td>{user.name}</td>
                      <td>{user.questions}</td>
                      <td>{user.answers}</td>
                      <td>{user.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
      );
    }
  }
  function mapStateToProps ({ users }) {
    var leaderboard = [];
    Object.entries(users).forEach(
        ([key, value]) =>{
            const questions = value.questions.length
            const answers = Object.keys(value.answers).length
            leaderboard.push({
                id: value.id,
                name: value.name,
                avatarURL: value.avatarURL,
                questions: questions,
                answers: answers,
                score: questions + answers
            })
        }
    );
    return {
      leaderboard: leaderboard.sort((a,b) => b.score - a.score)
    }
  }
  
  export default connect(mapStateToProps)(LeaderBoard)