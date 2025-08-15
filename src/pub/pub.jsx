import React from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import './pub.css';

export default class Pub extends React.Component {
  componentDidMount() {
    this.flickity = new Flickity(this.carousel, {
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      autoPlay: 2000,
      pauseAutoPlayOnHover: true,
    });
  }

  render() {
    return (
      <div id="pub">
        <div className='titre'>
        <h1>Découvrez nos <br></br><span>nouveaté du moment</span></h1>
        </div>
        {/* Carrousel Flickity */}
        <div
          className="carousel"
          ref={(c) => (this.carousel = c)} // Référence pour Flickity
        >
          {/* Chaque cellule du carrousel */}
          <div className="carousel-cell"></div>
          <div className="carousel-cell"></div>
          <div className="carousel-cell"></div>
          <div className="carousel-cell"></div>
        </div>
      </div>
    );
  }
}