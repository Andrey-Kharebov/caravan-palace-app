import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavMenu.module.css';

function NavMenu({ pathname, activeBurger }) {
  return (
    <nav className={ activeBurger ? `${classes.navMenu} ${classes.burgered}` : classes.navMenu }>
      <ul>
        <li className={ pathname === '/tour' ? classes.activePage : null }>
          <NavLink to='/tour'>Tour</NavLink>
        </li>
        <li className={ pathname === '/store' ? classes.activePage : null }>
          <NavLink to='/store'>Store</NavLink>
          <ul>
            <li><a href="https://www.hellomerch.com/collections/caravan-palace" target="_blank" rel="noreferrer">USA + Canada</a></li>
            <li><a href="https://www.store-caravanpalace.com" target="_blank" rel="noreferrer">Rest of the world</a></li>
          </ul>
        </li>
        <li className={ pathname === '/video' ? classes.activePage : null }>
          <NavLink to='/video'>Video</NavLink>
        </li>
      </ul>
    </nav>
  )
}


export default NavMenu;

