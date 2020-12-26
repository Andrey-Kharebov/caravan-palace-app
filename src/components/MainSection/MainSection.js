import React from 'react';
import classes from './MainSection.module.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import TourPage from './TourPage/TourPage';



function MainSection() {
  return (
    <section className={ classes.mainSection }>
      <Switch>
        <Route path='/' exact><MainPage /></Route>
        <Route path='/tour' exact><TourPage /></Route>
      </Switch>
    </section>
  )
}

export default MainSection;
