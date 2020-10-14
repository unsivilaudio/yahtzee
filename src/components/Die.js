import React from 'react';
import '../assets/stylesheets/Die.css';

const die = props => {
    const styles = ['Die'];
    switch (props.val) {
        case 1:
            styles.push('One');
            break;
        case 2:
            styles.push('Two');
            break;
        case 3:
            styles.push('Three');
            break;
        case 4:
            styles.push('Four');
            break;
        case 5:
            styles.push('Five');
            break;
        case 6:
            styles.push('Six');
            break;
        default:
            styles.push('One');
            break;
    }

    if (props.locked) styles.push('Disabled');
    if (props.rolling && !props.locked) styles.push('Die-rolling');

    return (
        <button className={styles.join(' ')} onClick={props.handleClick}>
            <span className='Dot'></span>
        </button>
    );
};

export default die;
