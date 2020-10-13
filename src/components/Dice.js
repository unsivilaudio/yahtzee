import React from 'react';
import Die from './Die';
import '../assets/stylesheets/Dice.css';

const dice = props => {
    return (
        <div className='Dice'>
            {props.dice.map((d, idx) => (
                <Die
                    handleClick={props.handleClick}
                    val={d}
                    locked={props.locked[idx]}
                    idx={idx}
                    key={idx}
                />
            ))}
        </div>
    );
};

export default dice;
