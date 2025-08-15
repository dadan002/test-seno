import React from 'react';
import './section.css';


export default class Sec extends React.Component {
    render() {
        return (
            <div id='sec'>
                <div className='titre'>
                    <h1>{this.props.title}</h1>
                </div>
                <div className='produits'>
                    <div className='produit'>
                        <a href="."><img src={`/source/${this.props.dos}/pub1.webp`} alt="fds" /></a>
                        <button>acheter</button>
                    </div>
                    <div className='produit'>
                        <a href="."><img src={`/source/${this.props.dos}/pub2.webp`} alt="fds" /></a>
                        <button>acheter</button>
                    </div>
                    <div className='produit'>
                        <a href="."><img src={`/source/${this.props.dos}/pub3.webp`} alt="fds" /></a>
                        <button>acheter</button>
                    </div>
                    <div className='produit'>
                        <a href="."><img src={`/source/${this.props.dos}/pub4.webp`} alt="fds" /></a>
                        <button>acheter</button>
                    </div>
                </div>
            </div>
        );
    }
}