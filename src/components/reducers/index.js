import { combineReducers } from 'redux';
import quizReducer from './quizReducer';
import questionReducer from './questionReducer';


export default combineReducers({
    questionReducer,
    quizReducer
})