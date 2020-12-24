import React from 'react';
import classes from './FooterNavMenu.module.css';
import footerLogoRed from '../../../assets/footer-logo-red.svg';
import FooterFollow from './FooterFollow/FooterFollow';


function FooterNavMenu() {
  return (
    <div className={ classes.footerNavMenu }>
      <div className={ classes.footerLogo }>
        <img src={ footerLogoRed } alt='Caravan Palace'></img>
      </div>
      <ul className={ classes.footerMenu }>
        <li>
          <a href="/">Tour</a>
        </li>
        <li><a href="https://www.hellomerch.com/collections/caravan-palace" target="_blank" rel="noreferrer">Store USA + Canada</a></li>
        <li><a href="https://www.store-caravanpalace.com" target="_blank" rel="noreferrer">Store Rest of the world</a></li>
        <li>
          <a href="/">Video</a>
        </li>
      </ul>
      <FooterFollow />
    </div>
  )
}

export default FooterNavMenu
