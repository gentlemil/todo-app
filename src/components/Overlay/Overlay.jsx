import React, { Component } from 'react';
import './Overlay.scss';

class Overlay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,

        }
    };

    toggleVisible = () => {
        this.setState(prevState => {
            return {
                visible: !prevState.visible
            };
        });
    }

    render() {

        const overlayClass =
            this.state.visible === true
                ? 'overlay__modal overlay__modal--visible'
                : 'overlay__modal';

        return (
            <div className='overlay'>
                <span className='countdown__icons' onClick={() => this.toggleVisible()}>
                    <i className='icon info' />
                </span>
                <div className={overlayClass}>
                    <span onClick={() => this.toggleVisible()} className='overlay__close'>
                        <i className='icon close' />
                    </span>
                    {this.props.children}
                </div>
            </div>
        );
    }
};

export default Overlay;