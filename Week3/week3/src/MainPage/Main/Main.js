import "../../Assets/Style.css";
import LeftColumn from "./Columns/LeftColumn";
import MiddleColumn from "./Columns/MiddleColumn/MiddleColumn";
import RightColumn from "./Columns/RightColumn";
function Main() {
  return (
    <main>
      <section className="row">
          <LeftColumn/>
          <MiddleColumn/>
          <RightColumn/>
      </section>
    </main>
  );
}

export default Main;
