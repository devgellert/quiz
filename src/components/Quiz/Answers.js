import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../includes';

const Answers = ({ setChosenId, quiz, questions }) => {
    let { chosenId, checked, activeQuestion } = quiz;

    const answerStyle = i => {
        if(checked) {
            if( i === questions[activeQuestion].rightId) {
                return { backgroundColor: 'lightgreen'}
            }else if(chosenId === i) {
                return {backgroundColor: 'red'};
            }
        }else {
            if(chosenId === i) {
                return {backgroundColor : 'rgba(132,238,255, 1)'};
            }
        }
    }
    
    return (
        <div id='answers'>
            {questions[activeQuestion].answers.map((answer, i) => (
                <div
                    style={answerStyle(i+1)}
                    key={i}
                    onClick={!checked ? () => setChosenId(i+1) : () => {}} className='answer'
                >
                    <span> {i+1} </span> {answer}
                </div>

            ))}
        </div>
    );
}

export default connect( mapStateToProps, mapDispatchToProps )(Answers);
