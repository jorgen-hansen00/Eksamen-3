import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container-footer">
        <div className="row">
          {/* Column1 */}
          <div className="col1">
            <h4>Eksempel</h4>
            
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Streeet South North</li>
            
          </div>
          {/* Column2 */}
          <div className="col2">
            <h4>Kontakt</h4>
            
              <li>45237524</li>
              <li>eksempel@juh.com</li>
              <li>Truls HT</li>
            
          </div>
          {/* Column3 */}
          <div className="col3">
            <h4>Navigasjon her</h4>
            
              <li>Home</li>
              <li>About</li>
              <li>OSV</li>
            
          </div>
        </div>
        <hr />
        <div className="row2">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Slimjet | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
