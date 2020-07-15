import React, { Component } from 'react';

class Flat extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick = () => {
    const { index, setFlat } = this.props;
    setFlat(index);
  }

  render() {
    const { imageUrl, selected, flat, name } = this.props;

    return (
      <div
        className={`card ${selected ? 'active' : ''}`}
        style={
          { backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${imageUrl}')` }
         }
      >
        <div className="card-category">
          {flat.price}
          {flat.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    );
  }
}

export default Flat;
