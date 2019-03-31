import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api'
import { receiveUsers, addQuestionToUser, addAnswerToUser } from '../actions/users'
import { receiveQuestions, handleAddQuestion, answerQuestion } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}

export function addQuestionAction (auth, optOne, optTwo) {
  return dispatch => {
    saveQuestion({
      optionOneText: optOne,
      optionTwoText: optTwo,
      author: auth
    }).then(question => {
      dispatch(addQuestionToUser(question))
      dispatch(handleAddQuestion(question))
    })
  }
}

export function handleAnswerQuestion (auth, qid, option) {
  const data = {
    authedUser: auth,
    qid,
    answer: option
  }
  return (dispatch) => {
    saveQuestionAnswer(data)
      .then(() => {
        dispatch(answerQuestion(auth, qid, option))
        dispatch(addAnswerToUser(auth, qid, option))
      })
  }
}