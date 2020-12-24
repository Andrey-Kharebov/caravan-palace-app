import React from 'react';
import classes from './Footer.module.css';
import FooterForm from './FooterForm/FooterForm';
import FooterNavMenu from './FooterNavMenu/FooterNavMenu';


function Footer() {
  return (
    <footer className={ classes.footer }>
      <FooterNavMenu />
      <FooterForm />
    </footer>
  )
}

export default Footer;
