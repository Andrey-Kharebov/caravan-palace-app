import React from 'react';
import classes from './StorePage.module.css';
import storeImage from '../../../assets/store-title.png';

function StorePage() {

  return (
    <div className={ classes.storePage }>
      <div className={ classes.content }>
        <div className={ classes.storeImage }>
          <img src={ storeImage } alt='storeImage'></img>
        </div>
      </div>
      <div className={ classes.storeOptions }>
        <div className={ classes.links }>
          <ul>
            <li>
              <a href='https://www.hellomerch.com/collections/caravan-palace' target='_blank'  rel='noreferrer' className='btn btn--transparent'>
                <button>
                  USA + Canada
                </button>
              </a>
            </li>
            <li>
              <a href='https://www.store-caravanpalace.com' target='_blank'  rel='noreferrer' className='btn btn--transparent'>
                <button>
                  Rest of the world
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StorePage;
