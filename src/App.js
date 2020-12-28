import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainSection from './components/MainSection/MainSection';

function App() {
  const [activeBurger, setActiveBurger] = useState(false);

  const activeBurgerHandler = () => {
    setActiveBurger(a => !a);
  }

  return (
    <div className='wrapper'>
      <Header activeBurger={ activeBurger } activeBurgerHandler={ activeBurgerHandler } setActiveBurger={ setActiveBurger } />
      <MainSection activeBurger={ activeBurger } setActiveBurger={ setActiveBurger } />
      <Footer activeBurger={ activeBurger } />
    </div>
  );
}

export default App;
