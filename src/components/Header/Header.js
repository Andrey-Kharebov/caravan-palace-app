import React from 'react';
import classes from './Header.module.css';
import NavMenu from './NavMenu/NavMenu';
import Socials from './Socials/Socials';


function Header() {
  return (
    <header className={ classes.header }>
      <Socials />
      <NavMenu />
    </header>
  )
}

export default Header;
