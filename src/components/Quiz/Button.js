import React from 'react';

import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../includes';


const Button = ({quiz, toggleChecked, questions, increasePoints, increaseActiveQuestion, setEnd}) => {
    let { chosenId, checked, activeQuestion } = quiz;
    const checkAnswer = () => {
        toggleChecked();
        if ( chosenId === questions[activeQuestion].rightId ) {
            increasePoints();
        }
    }
    const nextQuestion = () => {
        toggleChecked();
        if ( activeQuestion < questions.length - 1 ) {
            increaseActiveQuestion();
        } else {
            setEnd();
        }
    }
    return (
        checked ? 
            <button
                id='continue-button'
                onClick={() => nextQuestion()}
            >
                Continue
            </button>
        :
            <button
                disabled={ !chosenId ? true : false}
                id='check-button'
                onClick={() => checkAnswer()}
            >
                Check
            </button>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)( Button ) ;
