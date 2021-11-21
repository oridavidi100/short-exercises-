import React, { Component } from 'react';
import { hotelData } from '../hotels';
export class HotelsGallery extends Component {
  render() {
    return (
      <div>
        <ul className='hotelsList'>
          {' '}
          {hotelData.map((hotel) => (
            <li>
              <img alt='hotel-img' src='' />
              <span>{hotel.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HotelsGallery;
