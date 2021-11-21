import React, { Component } from 'react';
import { hotelData } from '../hotels';
import { kebabCase } from '../helpers/string';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HotelCard from './HotelCard';
export class HotelsGallery extends Component {
  render() {
    return (
      <div>
        <ul className='hotelsList'>
          {' '}
          {hotelData.map((hotel) => (
            <Link to={'/' + kebabCase(hotel.name)}>{<HotelCard name={hotel.name} hotel={hotel['street name']} />}</Link>
            // <li
            //   onClick={() => {
            //     console.log(JSON.stringify(hotel));
            //   }}
            //   key={hotel.name}
            // >
            //   <img alt='hotel-img' src='' />
            //   <span>{hotel.name}</span>
            // </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HotelsGallery;
