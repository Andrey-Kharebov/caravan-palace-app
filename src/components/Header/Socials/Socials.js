import React from 'react';
import classes from './Socials.module.css';

// Socials 
import facebook from '../../../assets/socials/facebook.svg';
import instagram from '../../../assets/socials/instagram.svg';
import twitter from '../../../assets/socials/twitter.svg';
import youtube from '../../../assets/socials/youtube.svg';
import apple from '../../../assets/socials/apple.svg';
import spotify from '../../../assets/socials/spotify.svg';

function Socials() {
  return (
    <div className={ classes.socials }>
      <ul>
        <li><a className={ classes.facebook } href='https://www.facebook.com/CaravanPalace' target='_blank' rel="noreferrer"><img src={ facebook } alt='facebook'></img></a></li>
        <li><a className={ classes.instagram} href='https://www.instagram.com/caravanpalace' target='_blank' rel="noreferrer"><img src={ instagram } alt='instagram'></img></a></li>
        <li><a className={ classes.twitter } href='https://twitter.com/caravanpalace' target='_blank' rel="noreferrer"><img src={ twitter } alt='twitter'></img></a></li>
        <li><a className={ classes.youtube } href='https://www.youtube.com/user/CaravanPalace?sub_confirmation=1' target='_blank' rel="noreferrer"><img src={ youtube } alt='youtube'></img></a></li>
        <li><a className={ classes.apple } href='https://geo.itunes.apple.com/artist/caravan-palace/293238693?mt=1&app=music&ls=1&at=1000lNCS&ct=CaravanPalace' target='_blank' rel="noreferrer"><img src={ apple } alt='apple'></img></a></li>
        <li><a className={ classes.spotify } href='https://open.spotify.com/artist/37J1PlAkhRK7yrZUtqaUpQ' target='_blank' rel="noreferrer"><img src={ spotify } alt='spotify'></img></a></li>
      </ul>
    </div>
  )
}

export default Socials;
