import React from 'react';
import classes from './Footer.module.css';
import FooterForm from './FooterForm/FooterForm';
import FooterNavMenu from './FooterNavMenu/FooterNavMenu';


function Footer(props) {
  return (
    <footer className={ classes.footer }>
      <FooterNavMenu activeBurger={ props.activeBurger } />
      <FooterForm activeBurger={ props.activeBurger } />
    </footer>
  )
}

export default Footer;
