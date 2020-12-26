import React from 'react';
import classes from './TourPage.module.css';
import ScriptTag from 'react-script-tag';
import rigthStatue from '../../../assets/right-statue.png';

function TourPage() {

  return (
    <div className={ classes.tourPage }>
      <div className={ classes.listPlate }>
        <a href='https://www.songkick.com/artists/603864' 
          className='songkick-widget' 
          data-theme='light' 
          data-track-button='on' 
          data-detect-style='true' 
          data-background-color='transparent' 
          data-locale='en'
        >Caravan Palace tour dates</a>
        <ScriptTag type='text/javascript' src='//widget.songkick.com/3799121/widget.js' />
      </div>
      <div className={ classes.rigthStatue }>
        <img src={ rigthStatue } alt='rightStatue'/>
      </div>
    </div>
  )
}

export default TourPage;
