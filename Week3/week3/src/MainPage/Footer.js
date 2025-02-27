import "../Assets/Style.css";
function footer() {
  return (
      <footer>
          <nav className="menu">
              <ul>
                  <li><a className="button" href="https://www.vodafoneparedesdecoura.com">Paredes de Coura</a></li>
                  <li><a className="button" href="https://nosalive.com">NOS Alive</a></li>
                  <li><a className="button" href="https://www.superbocksuperrock.pt">Super Bock Super Rock</a></li>
              </ul>
          </nav>

          <figure><img src="images/logo.png" alt="logo vdm" width="10%"/></figure>
          <address style={{color: "white"}}> info@festivalvilardemouros.pt</address>

      </footer>
  );
}

export default footer;