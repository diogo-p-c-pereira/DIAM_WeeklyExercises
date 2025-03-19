import "../Assets/Style.css";
import {Link} from "react-router-dom";

function Header() {
  return (
      <header>
          <br/>
          <h1>Festival Vilar de Mouros</h1>
          <img src="/images/l_cavilardemouros24.png" width="30%" alt="header image"/>
          <br/> <br/><br/>
          <nav className="menu">
              <ul>
                  <li><Link to="/" className="button">Home</Link></li>
                  <li><Link to="/FormVoluntario" className="button">Formulário Voluntariado</Link></li>
                  <li><Link to="/LineUp" className="button">Artistas Confirmados</Link></li>
              </ul>
          </nav>
      </header>
  );
}

export default Header;
