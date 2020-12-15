import React from 'react';
import classes from './NavMenu.module.css';

function NavMenu() {
  return (
    <nav className={ classes.navMenu }>
      <ul>
        <li>
          <a href="/">Tour</a>
        </li>
        <li>
          <a href="/">Store</a>
          <ul>
            <li><a href="https://www.hellomerch.com/collections/caravan-palace" target="_blank" rel="noreferrer">USA + Canada</a></li>
            <li><a href="https://www.store-caravanpalace.com" target="_blank" rel="noreferrer">Rest of the world</a></li>
          </ul>
        </li>
        <li>
          <a href="/">Video</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu;
