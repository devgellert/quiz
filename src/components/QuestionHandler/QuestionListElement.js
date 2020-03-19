import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../includes';

const QuestionListElement = ({singleQuestion, removeQuestion}) => {
    let { question, answers, rightId, id } = singleQuestion;
    const deleteQuestion = (e, id) => {
        e.preventDefault();
        removeQuestion(id);
    }
    return (
        <div className='question-list-element'>
            <button
            onClick={e => deleteQuestion(e, id)}
            >delete</button>
            <h1>{question }</h1>
            {answers.map((answer, id) => (
                <div
                    key={id}
                    className={rightId === id+1 ? 'right' : ''}
                > { answer } </div>
            ))}
        </div>
    );
}

export default connect( mapStateToProps, mapDispatchToProps )( QuestionListElement );
