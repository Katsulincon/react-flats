import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list';

import Flat from './flat';
import flats from '../../data/flats';
import Marker from './marker';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }


  setFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  center() {
    const { lat, lng } = this.state.selectedFlat;
    return {
      lat,
      lng
    };
  }


  render() {
    const { selectedFlat } = this.state;

    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={selectedFlat}
          setFlat={this.setFlat}
        />
        <div className="map-container">
          <GoogleMapReact
            defaultCenter={this.center()}
            defaultZoom={12}
          >
            <Marker lat={selectedFlat.lat} lng={selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
