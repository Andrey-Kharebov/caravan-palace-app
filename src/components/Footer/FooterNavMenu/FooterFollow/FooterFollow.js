import React from 'react';
import classes from './FooterFollow.module.css';
import Socials from '../../../Header/Socials/Socials'

function FooterFollow() {
  return (
    <div className={ classes.footerFollow }>
      <h3>Follow us on</h3>
      <Socials position={ 'footer' } />
    </div>
  )
}

export default FooterFollow
