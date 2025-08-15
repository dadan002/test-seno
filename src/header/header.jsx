import './header.css'
import React from "react";
import logo from '../source/logo(blanc).png';

export default class Header extends React.Component {
        render() {
          return (
            <div className='header'>
                <div id='rech'>
                    <input type="search"  id="recherche" placeholder='RECHERCHE' />
                    <i class='bx bx-search'></i>

                </div>
                <div id='connect'>
                    <div className='logo'>
                        <img src={logo} alt="logo" id='logo' />
                    </div>
                    <div className='connect'>
                            <ul>
                                <li><a href=".">connect<i className='bx  bx-user'  ></i> </a></li>
                                <li><a href=".">panier<i className='bx  bx-basket'  ></i> </a></li>
                            </ul>
                    </div>
                </div>
            </div>
          );
      }
    }