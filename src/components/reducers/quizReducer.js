import { SET_CHOSEN_ID, TOGGLE_CHECKED, INCREASE_POINTS, INCREASE_ACTIVE_QUESTION, SET_END, RESTART_QUIZ, SET_NAME } from '../actions/types';

const initialState = {
    chosenId: undefined,
    checked: false,
    activeQuestion: 0,
    points: 0,
    end: false,
    name: ''
}
export default (state = initialState, action) => {
    switch(action.type) {
        case SET_CHOSEN_ID:
            return { ...state, chosenId: action.payload}
        case TOGGLE_CHECKED:
            return { ...state, checked: !state.checked}
        case INCREASE_POINTS:
            return { ...state, points: state.points+1 }
        case INCREASE_ACTIVE_QUESTION:
            return { ...state, activeQuestion: state.activeQuestion + 1 }
        case SET_END: 
            return { ...state, end: true }
        case RESTART_QUIZ:
            return initialState
        case SET_NAME:
            return { ...state, name: action.payload }
        default:
            return state
    }
}