import React from 'react';
import '../assets/stylesheets/RuleRow.css';

const ruleRow = props => {
    return (
        <tr className='RuleRow RuleRow-active' onClick={props.doScore}>
            <td className='RuleRow-name'>{props.name}</td>
            <td className='RuleRow-score'>{props.score}</td>
        </tr>
    );
};

export default ruleRow;
