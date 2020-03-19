import React from 'react';
import { connect } from 'react-redux';
import QuestionListElement from './QuestionListElement';
import '../../style/css/question-list.css';
import { mapStateToProps, mapDispatchToProps } from '../includes';
const QuestionList = ({questions}) => {
    return (
        <div id="question-list">
            <h1>Question List</h1>
            {questions.length !== 0 ? questions.map((question, key) => 
                (
                    <QuestionListElement
                        key={key}
                        singleQuestion={question}
                    />
                )) : <h2>Theres no questions, yet..</h2>
                    }
        </div>
    );
}


export default connect( mapStateToProps, mapDispatchToProps )( QuestionList );
