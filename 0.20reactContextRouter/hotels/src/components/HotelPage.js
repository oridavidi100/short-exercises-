import React, { Component } from 'react';
// import { flushSync } from 'react-dom';
// const RNFS = require('react-native-fs');
import { hotelsData } from '../hotels';

export class HotelPage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: hotelsData, likes: 0 };
  }
  // componentDidUpdate() {
  //   this.likeFunc();
  // }

  // shouldComponentUpdate() {
  //   return this.likeFunc;
  // }
  likeFunc = () => {
    let hotelLikes;
    const data = this.state.data;
    for (let i = 0; i < data.length; i++) {
      // console.log(hotel.name);
      if (data[i].name === this.props.name) {
        console.log(this.state.data[i]);
        this.setState(() => (data[i].likes = this.state.data[i] + 1));
        hotelLikes = this.state.data[i].likes;
        console.log(hotelLikes);
      }
    }
    console.log(this.state.data.length);
    return this.setState({ likes: hotelLikes });
  };
  render() {
    return (
      <div>
        <p>מלון :{this.props.name}</p>
        <p>רחוב :{this.props.street}</p>
        <a href='tel:{this.props.number}'>Call us at {this.props.number}</a>
        <button type='button' onClick={this.likeFunc}>
          like
        </button>
        <p> {this.state.likes}</p>
        <img alt='hotel' src={this.props.img}></img>
      </div>
    );
  }
}

export default HotelPage;
