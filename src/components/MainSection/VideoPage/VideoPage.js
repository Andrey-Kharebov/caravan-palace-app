import React from 'react';
import classes from './VideoPage.module.css';
import rigthStatue from '../../../assets/right-statue.png';

function VideoPage() {

  return (
    <div className={ classes.videoPage }>
      <div className={ classes.videoPlate}>
        <div className={ classes.player}>
          <iframe title='Caravan Palace video' width='100%' height='100%' src='https://www.youtube.com/embed/QdabIfmcqSQ' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen=''></iframe>
        </div>
        <div className={ classes.legend }>
          <p>Cette vidéo a été réalisée avec le soutien de la</p>
          <a href='https://www.youtube.com/channel/UCKH9HfYY_GEcyltl2mbD5lA' target='_blank'  rel='noreferrer' className='btn btn--transparent'>
            <button className={ classes.moreButton }>
              More videos
            </button>
          </a>
        </div>
      </div>
      <div className={ classes.rigthStatue }>
        <img src={ rigthStatue } alt='rightStatue'/>
      </div>
    </div>
  )
}

export default VideoPage;
