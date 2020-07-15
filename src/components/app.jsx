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
      flats: flats
    };
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  setFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }


  render() {
    console.log(this.state.flats);

    return(
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          setFlat={this.setFlat}
        />
　　　　　<div className="map-container">
          <GoogleMapReact
            defaultCenter={this.center()}
            defaultZoom={12}
          >
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
