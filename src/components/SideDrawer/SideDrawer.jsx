import React from 'react';
import './SideDrawer.scss';

const SideDrawer = props => {

    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <nav className={drawerClasses}>

            {/* <nav className='side-drawer'> */}
            <ul>
                <li><a href='#'>MAIN PAGE</a></li>
                <li><a href='#'>ADD</a></li>
                <li><a href='#'>SHOW ALL</a></li>
                <li><a href='#'>CALENDAR</a></li>
            </ul>
        </nav>
    );

};

export default SideDrawer;