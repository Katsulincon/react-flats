import React, { Component } from 'react';
import FlatList from './flat_list';
import GoogleMapReact from './google_map_react';
import Flat from './flat';
import flats from '../../data/flats';

class App extends Component {
  constructor() {
    super();
    this.state = {
      flats: flats
    };
  }


  render() {
    console.log(this.state.flats);

    return(
      <div>
        <h1>Hello World</h1>
        <FlatList />
        <GoogleMapReact />
        <Flat />
      </div>
    );
  }
}

export default App;
