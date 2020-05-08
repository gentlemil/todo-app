import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

// import Home from '../Home/Home';
// import About from '../Linkbout/Linkbout';
// import Resume from '../Resume/Resume';
// import MyProjects from '../MyProjects/MyProjects';
// import MyContact from '../MyContact/MyContact';

import './Toolbar.scss'

const Toolbar = (props) => {
    return (
        <header className='toolbar' style={{ maxWidth: '700px' }}>
            <nav className='toolbar__navigation'>
                <div className='toolbar__toggle-button'>
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className='toolbar__logo'><Link to='/'>DOIT</Link></div>
                <div className='spacer'></div>

                <div className='toolbar_navigation-items'>
                    <ul>
                        <li><Link to='/create'>ADD</Link></li>
                        <li><Link to='/events-list'>SHOW ALL</Link></li>
                        <li><Link to='/contact'>CALENDAR</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Toolbar;
