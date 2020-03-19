import React, { useState } from 'react';
import Points from './Points';
import Question from './Question';
import Answers from './Answers';
import Button from './Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../includes';
import MenuLink from '../MenuLink';

const Module = ({ questions, quiz, restartQuiz, setName }) => {
    let { end, points, name } = quiz;
    let [ stateName, setStateName ] = useState('');
    if(!name) {
        return (
            <form id='name-form'>
                <h1>Type your name!</h1>
                <input 
                    type='text'
                    placeholder='Name..'
                    onChange={e => {
                        setStateName(e.target.value);
                    }}
                    value={stateName}
                />
                <br/>
                <button
                    onClick = {e => {
                        e.preventDefault(); 
                        setName(stateName);
                    }}
                >
                    Save name
                </button>
            </form>
        )
    }else if(end) {
        return (
            <div>
                <MenuLink/>
                <h1>Dear { name }</h1>
                <h3>The game has ended.</h3>
                <h3>Yout points are: {points} out of {questions.length}</h3>
                <Link onClick={() => restartQuiz()} to='/'><div>Back to the menu</div></Link>
            </div>
        )
    } else if (questions.length === 0) {
        return (
            <div>
                <MenuLink/>
                <h1>Dear { name }</h1>
                <h3>There are no questions in the list.</h3>
                <Link to='/question-handler'><h3>If you want to play this game, you ought to create some questions.</h3></Link>
                <Link to='/'><div>Back to the menu</div></Link>
            </div>
        )
    }else {
        return (
            <div id='module'>
                <MenuLink/>
                <Points/>
                <Question/>
                <Answers/>
                <Button/>
            </div>
        );
    }
    
}
export default connect( mapStateToProps, mapDispatchToProps )( Module );
