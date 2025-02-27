import "../Assets/Style.css";
function Header() {
  return (
      <header>
          <br/>

          <h1>Festival Vilar de Mouros</h1>
          <img src="/images/l_cavilardemouros24.png" width="40%" alt="header image"/>
          <br/> <br/><br/>
          <nav className="menu">
              <ul>
                  <li><a className="button" href="Main.html">Home</a></li>
              </ul>
          </nav>
      </header>
  );
}

export default Header;
