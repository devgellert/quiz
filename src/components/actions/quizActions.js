import { SET_CHOSEN_ID, TOGGLE_CHECKED, INCREASE_POINTS, INCREASE_ACTIVE_QUESTION, SET_END, RESTART_QUIZ, SET_NAME } from './types'


export const setChosenId = payload => ({
    type: SET_CHOSEN_ID, 
    payload
})

export const toggleChecked = () => ({
    type: TOGGLE_CHECKED
})

export const increasePoints = () => ({
    type: INCREASE_POINTS
})

export const increaseActiveQuestion = () => ({
    type: INCREASE_ACTIVE_QUESTION
})

export const setEnd = () => ({
    type: SET_END
})

export const restartQuiz = () => ({
    type: RESTART_QUIZ
})

export const setName = payload => ({
    type: SET_NAME,
    payload
})