import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import classes from './Header.module.css';
import NavMenu from './NavMenu/NavMenu';
import Socials from './Socials/Socials';
import headerLogoWhite from '../../assets/header-logo-white.svg';

function Header(props) {
  return (
    <header className={ classes.header }>
      <Socials />
      { props.location.pathname !== '/' 
        ? <div className={ classes.navLogo }>
            <NavLink to='/'><img src={ headerLogoWhite } alt='Caravan Palace'></img></NavLink>
          </div>
        : null
      }
      <NavMenu pathname={ props.location.pathname } />
    </header>
  )
}

export default withRouter(Header);
