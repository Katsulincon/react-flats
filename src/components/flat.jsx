import React, { Component } from 'react';

class Flat extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick = () => {
    this.props.setFlat(this.props.index);
  }

  render() {
    console.log(this.props.imageUrl);
    return (
      <div className="card"
        style={
          { backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.imageUrl}')` }
         }
      >
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    );
  }
}

export default Flat;
