import React from 'react';
import Die from './Die';
import '../assets/stylesheets/Dice.css';

const dice = props => {
    return (
        <div className='Dice'>
            {props.dice.map((d, i) => (
                <Die
                    key={i}
                    val={d}
                    locked={props.locked[i]}
                    handleClick={() => props.handleClick(i)}
                />
            ))}
        </div>
    );
};

export default dice;
