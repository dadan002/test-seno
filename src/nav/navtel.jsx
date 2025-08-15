import './navtel.css'
import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
export default class Navtel extends React.Component {
    static propTypes = {
    onClick: PropTypes.func,
  };

  handleInternalClick  = () => {
    this.props.onClick(true);
  };
        render() {
          return (
            
            <div id='Navtel'>
              <span ><p onClick={this.handleInternalClick }>X</p></span>
              <hr />
              <ul>
              <li><Link to="/"><a href=".">Acceuil</a></Link></li>
              <hr />
              <li><Link to="/Produit"><a href=".">Produit</a></Link></li>
              <hr />
              <li><Link to="/"><a href=".">Contact</a></Link></li>
              <hr />
              </ul>
                
            </div>
          );
      }
    }