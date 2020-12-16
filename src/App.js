import React from 'react';
import './App.css';
import Header from './components/Header/Header';

// Images 
import mainImage from './assets/home-title.svg';
import albumImage from './assets/album.jpg';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <section className='mainSection'>
        <div className='content'>
          <p>new album available</p>
          <div className='mainImage'>
            <img src={ mainImage } alt='mainImage'></img>
          </div>
          <a href="https://lnk.to/Chronologic" target="_blank" rel="noreferrer">
            <button className='orderButton'>
              Order now
            </button>
          </a>
        </div>
        <div className='picture'>
          <img src={ albumImage } alt='albumImage'></img>
        </div>
      </section>
    </div>
  );
}

export default App;
