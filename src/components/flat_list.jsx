import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const flats = this.props.flats.map((flat, index) => {
      return (
        <Flat
          name={flat.name}
          imageUrl={flat.imageUrl}
          key={flat.lat}
          flat={flat}
          index={index}
          setFlat={this.props.setFlat}
        />
      );
    });


    return (
      <div className="flat-list">
        { flats }
      </div>
    );
  }
}

export default FlatList;
