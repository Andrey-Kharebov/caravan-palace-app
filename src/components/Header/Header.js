import React, { useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import classes from './Header.module.css';
import NavMenu from './NavMenu/NavMenu';
import Socials from './Socials/Socials';
import headerLogoWhite from '../../assets/header-logo-white.svg';

function Header(props) {

  useEffect(() => {
    props.setActiveBurger(false);
    // eslint-disable-next-line
  }, [props.location.pathname])

  return (
    <header className={ props.activeBurger ? `${classes.header} ${classes.opened}` : classes.header }>
      <Socials activeBurger={ props.activeBurger } />
      { props.location.pathname !== '/' || props.activeBurger
        ? <div className={ props.activeBurger ? `${classes.navLogo} ${classes.burgered}` : classes.navLogo }>
            <NavLink to='/'><img src={ headerLogoWhite } alt='Caravan Palace'></img></NavLink>
          </div>
        : null
      }
      <NavMenu activeBurger={ props.activeBurger } pathname={ props.location.pathname } />
      <div
        className={ props.activeBurger ? `${classes.burgerBtn} ${classes.open}` : classes.burgerBtn }
        onClick={ () => { props.activeBurgerHandler() }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  )
}

export default withRouter(Header);
