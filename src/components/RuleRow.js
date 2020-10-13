import React from 'react';
import '../assets/stylesheets/RuleRow.css';

const ruleRow = props => {
    const styles = ['RuleRow'];

    if (props.enabled) {
        styles.push('RuleRow-active');
    } else {
        styles.push('RuleRow-disabled');
    }

    return (
        <tr className={styles.join(' ')} onClick={props.doScore}>
            <td className='RuleRow-name'>{props.name}</td>
            <td className='RuleRow-score'>{props.score}</td>
        </tr>
    );
};

export default ruleRow;
