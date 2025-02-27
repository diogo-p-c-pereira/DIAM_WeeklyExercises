import "../Assets/Style.css";
import LeftColumn from "./main/LeftColumn";
import MiddleColumn from "./main/MiddleColumn";
import RightColumn from "./main/RightColumn";
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
