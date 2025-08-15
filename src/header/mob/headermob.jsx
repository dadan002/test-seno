import './headermob.css'
import React from "react";
import logo from '../../source/logo(blanc).png';
import PropTypes from "prop-types";
export default class HeaderMobile extends React.Component {
        static propTypes = {
        onClick: PropTypes.func,
      };
    
      handleInternalClick  = () => {
        this.props.onClick(false);
      };
        render() {
          return (
            <div className='headermob'>
                
                <div id='logo'>
                    <i className='bx bx-menu' onClick={this.handleInternalClick }></i>
                    <img src={logo} alt="logo" id='logo' />

                </div>
                <div className='rech'>
                    <input type="search" id='search' placeholder='  Rechercher' />
                    <i className='bx bx-search'></i>
                </div>
                <div id='connect'>
                    <div className='connect'>
                            <ul>
                                <li><a href="."><i className='bx  bx-user'  ></i> </a></li>
                                <li><a href="."><i className='bx  bx-basket'  ></i> </a></li>
                            </ul>
                    </div>
                </div>
            </div>
          );
      }
    }