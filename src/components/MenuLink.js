import React from 'react';
import { Link } from 'react-router-dom';
import { mapDispatchToProps, mapStateToProps } from './includes';
import { connect } from 'react-redux';
const MenuLink = ({restartQuiz}) => {
    return (
        <Link id='navlink' style={{
            textDecoration: 'none',
            color: 'black',
            padding: '10px',
            backgroundColor: 'none',
            position: 'absolute',
            left: '10px',
            top: '10px',
            border: '1px solid black'
        }}
        onClick={() => restartQuiz()}
        to='/'>
            MENU
        </Link>
    );
}

export default connect( mapStateToProps, mapDispatchToProps)(MenuLink);