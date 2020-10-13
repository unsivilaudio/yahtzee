import React from 'react';
import '../assets/stylesheets/Die.css';

const die = props => {
    return (
        <button
            className={'Die'}
            style={{
                backgroundColor: props.locked ? 'grey' : 'black',
            }}
            onClick={props.handleClick}>
            {props.val}
        </button>
    );
};

export default die;
