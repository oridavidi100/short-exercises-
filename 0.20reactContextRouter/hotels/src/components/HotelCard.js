import React, { Component } from 'react';

class HotelCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.street}</p>
        <p>{this.props.img}</p>
      </div>
    );
  }
}

export default HotelCard;
