import React from 'react';
import { Link } from 'react-router-dom';
import '../style/css/menu.css';

const style = {
    color: 'white',
    listStyle: 'none',
    textDecoration: 'none'
}
const Menu = () => {
    return (
        <nav>
            <ul>
                <Link style={style} to='/quiz'> <li>Quiz</li> </Link>
                <Link style={style} to='/question-handler'><li>Question handler</li></Link>
            </ul>
        </nav>
    );
}

export default Menu;
