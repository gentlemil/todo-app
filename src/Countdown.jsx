import React from 'react';
import './Countdown.css';

const Countdown = props => {
    return (
        <div className='countdown'>
            <strong>{props.name}</strong> - {props.time}
        </div>
    )
};

export default Countdown;