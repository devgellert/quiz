import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Form from './Form'
import QuestionList from './QuestionList';
import { mapStateToProps } from '../includes';
import MenuLink from '../MenuLink';

import '../../style/css/question-handler.css';

const QuestionHandler = ({questions}) => {
    useEffect(() => {
        localStorage.setItem('questions', JSON.stringify(questions));
    }, [questions])
    return (
        <div id="question-handler">
            <MenuLink/>
            <QuestionList/>
            <Form/>
        </div>
    );
}



export default connect(mapStateToProps)( QuestionHandler );
