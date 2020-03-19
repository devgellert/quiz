import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../includes';

const Question = ({quiz, questions}) => {
    let { activeQuestion } = quiz;
    return (
        <div id='question'>
            <span>Question {activeQuestion + 1} out of {questions.length}</span>
            <br/>
            <h3>
                {questions[activeQuestion].question}
            </h3>
            
        </div>
    );
}

export default connect( mapStateToProps, mapDispatchToProps )(Question);
