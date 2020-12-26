import React from 'react';
import classes from './MainPage.module.css';

// Images 
import mainImage from '../../../assets/home-title.svg';
import albumImage from '../../../assets/album.jpg';

function MainPage() {
  return (
    <div className={ classes.mainPage }>
      <div className={ classes.content }>
        <p>new album available</p>
        <div className={ classes.mainImage }>
          <img src={ mainImage } alt='mainImage'></img>
        </div>
        <a href="https://lnk.to/Chronologic" target="_blank" rel="noreferrer">
          <button className={ classes.orderButton }>
            Order now
          </button>
        </a>
      </div>
      <div className={ classes.picture }>
        <img src={ albumImage } alt='albumImage'></img>
      </div>
    </div>
  )
}

export default MainPage;
