import React, { Component } from 'react';
import { hotelsData } from '../hotels';
import { kebabCase } from '../helpers/string';
import { Link } from 'react-router-dom';
import { HotelCard } from './HotelCard';
import './hotelsGallery.css';

export class HotelsGallery extends Component {
  render() {
    return (
      <div>
        <ul className='hotelsList'>
          {' '}
          {hotelsData.map((hotel) => (
            <li>
              <Link key={hotel.name} to={'/' + kebabCase(hotel.name)}>
                {<HotelCard name={hotel.name} imgSrc={hotel.img} />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HotelsGallery;
