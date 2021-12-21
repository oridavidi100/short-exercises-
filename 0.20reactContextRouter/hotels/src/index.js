import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HotelsGallery from '../src/components/HotelsGallery';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { kebabCase } from './helpers/string';
import { hotelsData } from './hotels';
import { HotelPage } from './components/HotelPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exect path='/' element={<HotelsGallery />} />
        {hotelsData.map((hotel) => (
          <Route
            key={hotel.name}
            exact
            path={'/' + encodeURIComponent(kebabCase(hotel.name))}
            element={
              <HotelPage name={hotel.name} number={hotel.number} street={hotel['street name']} img={hotel.img} />
            }
          />
        ))}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
