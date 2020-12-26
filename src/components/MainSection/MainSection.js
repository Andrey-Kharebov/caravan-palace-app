import React from 'react';
import classes from './MainSection.module.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import TourPage from './TourPage/TourPage';
import VideoPage from './VideoPage/VideoPage';
import StorePage from './StorePage/StorePage';



function MainSection() {
  return (
    <section className={ classes.mainSection }>
      <Switch>
        <Route path='/' exact><MainPage /></Route>
        <Route path='/tour' exact><TourPage /></Route>
        <Route path='/video' exact><VideoPage /></Route>
        <Route path='/store' exact><StorePage /></Route>
      </Switch>
    </section>
  )
}

export default MainSection;
