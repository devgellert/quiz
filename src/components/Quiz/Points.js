import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../includes';


const Points = ({quiz}) => {
    const { points } = quiz;
    return (
        <div id='points'>
           Points: { points }
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Points);
