import { ADD_QUESTION, REMOVE_QUESTION } from '../actions/types';

const questions =  localStorage.getItem('questions');
const initialState =  questions ? JSON.parse(questions) : [];

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_QUESTION:
            let { question, answers, rightId, id } = action.payload;
            return [ ...state, {
                question, answers: [ ...answers ], rightId, id
            }]
        case REMOVE_QUESTION:
            const newState = state.filter(elem => elem.id !== action.payload);
            return [ ...newState ]
        default:
            return state
    }
}