import "../../../../../Assets/Style.css";
function cartaz() {
  return (
    <article>
      <h2 className="middle_h2">Cartaz</h2>
      <figure><a href="https://www.festivalvilardemouros.pt">
        <img src="images/vilar.png" id="festivalImage" width="40%" alt="Image not found: Cartaz" title="Cartaz"
             onMouseOver={disappear} onMouseOut={appear}/> </a>
        <figcaption>Cartaz 2025</figcaption>
      </figure>
    </article>
  );
}

const disappear = () => document.getElementById("festivalImage").style.opacity = "0";
const appear = () => document.getElementById("festivalImage").style.opacity = "1";


export default cartaz;
