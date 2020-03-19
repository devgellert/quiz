import {
    addQuestion,
    removeQuestion
} from './actions/questionActions';
import {
    setChosenId,
    toggleChecked,
    increasePoints,
    increaseActiveQuestion,
    setEnd,
    restartQuiz,
    setName
} from './actions/quizActions';


export const mapStateToProps = state => {
    return {
        questions: state.questionReducer,
        quiz: state.quizReducer
    }
}

export const mapDispatchToProps = {
    addQuestion, removeQuestion, setChosenId, toggleChecked, increasePoints, increaseActiveQuestion, setEnd, restartQuiz, setName
}