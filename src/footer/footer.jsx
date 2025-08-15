import './footer.css'
import React from "react";

export default class Footer extends React.Component {
        render() {
          return (
            <div id="footer">
  <div className="line-title">
    <span>À propos</span>
  </div>

  <div className="info">
    <div className="contact">
      <p><strong>Nous contacter :</strong></p>
      <p>
        Mail <i className="bx bx-envelope-open"></i> :
        <a href="mailto:salhi.skander.002@gmail.com"> salhi.skander.002@gmail.com</a><br/>
        Tel <i className="bx bx-phone"></i> :
        <a href="tel:55253961"> 55253961</a>
      </p>
    </div>

    <div className="res">
      <p><strong>Où nous suivre :</strong></p>
      <a href="#" className="fa fa-facebook"></a>
      <a href="#" className="fa fa-twitter"></a>
      <a href="#" className="fa fa-instagram"></a>
    </div>
  </div>
</div>

          );
      }
    }