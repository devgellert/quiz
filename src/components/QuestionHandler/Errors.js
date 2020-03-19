import React from 'react';
import Error from './Error';
const Errors = ({ errors }) => {
    return (
        <div>
            {errors.map((error, i) => (
                <Error error={error} key={i}/>
            ))}
        </div>
    );
}

export default Errors;
