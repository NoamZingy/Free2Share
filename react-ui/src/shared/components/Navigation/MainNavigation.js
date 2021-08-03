import React, {useState} from 'react'
import MainHeader from './MainHeader';
import {Link} from 'react-router-dom'

import './MainNavigation.css';
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop'

const MainNavigation = props => {
    const [drwerIsOpen, setdrwerIsOpen] = useState(false)

const openDrawer = () => {
    setdrwerIsOpen(true);
}

const closeDrawer = () => {
    setdrwerIsOpen(false);
}

return (
    <>
    { drwerIsOpen && <Backdrop onClick={closeDrawer}/> }
<SideDrawer show={drwerIsOpen} onClick={closeDrawer}>
    <nav className="main-navigation__drawer-nav">
<NavLinks />
    </nav>
</SideDrawer> 

<MainHeader>
    <button className="main-navigation__menu-btn" onClick={openDrawer}>
    <span></span>
    <span></span>
    <span></span>
    </button>
    <h1 className="main-navigation__title">
      <Link to="/"> your places</Link> 
    </h1>
    <nav className = "main-navigation__header-nav">
       <NavLinks />
    </nav>
</MainHeader>
</>
 )
}

export default MainNavigation