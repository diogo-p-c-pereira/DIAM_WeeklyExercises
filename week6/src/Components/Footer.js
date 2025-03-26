import "../Assets/Style.css";
import React, { useState } from 'react';

function Footer() {
    const [hasFooter, setFooter] = useState(true);

  return (
      <footer onClick={() => {setFooter(!hasFooter);} }>
          <nav className="menu">
              <ul>
                  <li><a className="button" href="https://www.vodafoneparedesdecoura.com">Paredes de Coura</a></li>
                  <li><a className="button" href="https://nosalive.com">NOS Alive</a></li>
                  <li><a className="button" href="https://www.superbocksuperrock.pt">Super Bock Super Rock</a></li>
              </ul>
          </nav>

          {hasFooter?
              <div>
                <figure><img src="images/logo.png" alt="logo vdm" width="10%"/></figure>
                <address style={{color: "white"}}> info@festivalvilardemouros.pt</address><br/>
              </div>
              :
              <div>
                <h3>Autores</h3>
                <h4>André Soares &emsp;&emsp; Diogo Pereira &emsp;&emsp; Francisco Santos</h4><br/>
              </div>
          }
      </footer>
  );
}

export default Footer;