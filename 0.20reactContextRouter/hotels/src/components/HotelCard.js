import React, { Component } from 'react';

export class HotelCard extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.street}</p>
        <img alt='hotel' src={this.props.imgSrc} width='14%'></img>
      </div>
    );
  }
}
//   // "homepage": "http://oridavidi100.github.io/react/",
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",
export default HotelCard;
