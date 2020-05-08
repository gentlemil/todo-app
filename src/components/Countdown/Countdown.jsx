import React from 'react';
import PropTypes from 'prop-types';
import '../../../node_modules/semantic-ui-css/semantic.css';
import Overlay from '../Overlay/Overlay';
import {
    hourMinuteToSeconds,
    secondsToHourMinuteSecond,

} from '../../utils';
import './Countdown.css';

const Countdown = props => {

    const eventInSeconds = hourMinuteToSeconds(props.hour, props.minute);
    const nowInSeconds = hourMinuteToSeconds(
        props.timeNow.hour,
        props.timeNow.minute
    ) + props.timeNow.seconds

    const diff = eventInSeconds - nowInSeconds;
    const diffText = diff > 0 ? secondsToHourMinuteSecond(diff) : 'tomorrow';

    return (
        <div className='countdown'>
            <strong>{props.name}</strong> - {diffText}
            <div className='countdown__icons'>
                <i className='icon edit' onClick={() => props.onEditInit(props.id)} />
                <i className='icon trash' onClick={() => props.onRemove(props.id)} />
            </div>
            <Overlay>

                <div className='overlay-content-upper'>
                    <h1>{props.name}</h1>
                    <h3>
                        <i className='icon clock' />
                        {props.hour
                            .toString()
                            .padStart(2, 0)
                        }:{props.minute
                            .toString()
                            .padStart(2, 0)
                        }
                    </h3>
                </div>
                <div className='overlay-content-lower'>
                    <h3><i className='icon list' />DETAILS:</h3>
                    <p>{props.details}</p>
                </div>
                <div className='space'></div>
            </Overlay>
        </div>
    );
};

Countdown.propTypes = {
    name: PropTypes.string,
    hour: PropTypes.number,
    minute: PropTypes.number,
    details: PropTypes.string,
    onEditInit: PropTypes.func,
    timeNow: PropTypes.shape({
        hour: PropTypes.number,
        minute: PropTypes.number,
        seconds: PropTypes.number,
    }),
    onRemove: PropTypes.func,


}

export default Countdown;