import './nav.css'
import React from "react";
import { Link } from 'react-router-dom';
export default class Nav extends React.Component {
        render() {
          return (
            
            <div id='nav'>
                <ul>
                    <Link to="/"><li><a href=".">Acceuil</a></li></Link>
                    <Link to="/Produit"><li><a href=".">Produit</a></li></Link>
                  {/* faire un carreau quil nimpose aucune regle a  notre site
                <div style={{position: 'fixed',}}>
                      <p>sjadjbsdk</p>
                    </div> 
                    */}
                    <Link to="/Contact"><li><a href=".">Contact</a></li></Link>
                </ul>
            </div>
          );
      }
    }