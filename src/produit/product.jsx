import './product.css'
import React from "react";

export default class Product extends React.Component {
        render() {
          return (
            <div className="carte">
                <img src={`/source/sec1/pub1.webp`} alt="" />
                <div className='pr-ecriture'>
                    <h1>{this.props.title}</h1>
                    <p id='prix'>{this.props.prix}</p>

                </div>
            </div>
          );
      }
    }