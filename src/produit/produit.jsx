import Product from "./product";
import React from "react";
import './produit.css'
export default class Produits extends React.Component {
        render() {
          return (
            <div  className="produit">
                <div className="product-part">
                <Product title="roll machmoum" prix="5dt"/>
                <Product title="roll machmoum" prix="15dt"/>
                <Product title="roll machmoum" prix="52dt"/>
                <Product title="roll machmoum" prix="55dt"/>
                <Product title="roll machmoum" prix="65dt"/>
                </div>
            </div>
          );
      }
    }