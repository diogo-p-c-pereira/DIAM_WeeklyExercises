import "../../Assets/Style.css";
import Cartaz from "./MiddleContent/Cartaz";
import SlideShow from "./MiddleContent/SlideShow";
import Horario from "./MiddleContent/Horario";
function middleColumn() {
  return (
    <article className="column middle" style={{backgroundColor: "#bbb"}}>
      <Cartaz/>
      <br/>
      <SlideShow/>
      <br/>
      <Horario/>
      <br/>
    </article>
  );
}

export default middleColumn;
