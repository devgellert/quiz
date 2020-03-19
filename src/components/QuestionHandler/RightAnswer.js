import React from 'react';

const RightAnswer = ({ handleRightQuestion, id}) => {
    return (
        <div id="right-answer-section">
            <button onClick={(e) => handleRightQuestion(e, 'decrease')}>Decrease</button>
            <div id='right-id'>{id}</div>
            <button onClick={(e) => handleRightQuestion(e, 'increase')}>Increase</button>
        </div>
    );
}

export default RightAnswer;
