import React from 'react';

const Input = ({id, handleAnswers, rightId, value}) => {
    const name = `answer_${id}`;
    return (
        <div key={id} className={rightId === id ? 'form-section right' : 'form-section'}>
            <label>
                {`answer ${id}`}
            </label>
            <br/>
            <input
                name = {name}
                id={id}
                onChange={e => handleAnswers(e, id)}

            />
        </div>
        
    );
}

export default Input;
