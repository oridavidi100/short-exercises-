import React, { Component } from 'react';

export class HotelCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.street}</p>
        <img src={this.props.imgSrc} width='14%'></img>
      </div>
    );
  }
}

export default HotelCard;
