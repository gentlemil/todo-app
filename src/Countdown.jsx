import React from 'react';
import PropTypes from 'prop-types';
import '../node_modules/semantic-ui-css/semantic.css';

import './Countdown.css';

const Countdown = props => {
    return (
        <div className='countdown'>
            <strong>{props.name}</strong> - {props.hour}:{props.minute}
            <div className='countdown__icons'>
                <i className='icon times' onClick={() => props.onRemove(props.id)} />
            </div>
        </div>
    )
};

Countdown.propTypes = {
    name: PropTypes.string,
    hour: PropTypes.string,
    minute: PropTypes.string,
}

export default Countdown;