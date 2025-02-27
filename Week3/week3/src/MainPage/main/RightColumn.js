import "../../Assets/Style.css";
function rightColumn() {
  return (
    <article className="column side" style={{backgroundColor: "#ccc"}}>
      <h2> O nosso Festival</h2>
      <section>
        <h4>História</h4>
        <p>O Festival de Vilar de Mouros realizou-se pela primeira vez em 1965, com características idênticas a outros
          eventos minhotos de folclore,
          <br/> tendo ganho alguma projecção nacional na quarta edição, em 1968, com o alargamento do âmbito à música
          erudita e ao fado.</p>
      </section>
      <section>
        <h4>Localização</h4>
        <p>O nosso festival localiza-se na freguesia de Vilar de Mouros no Concelho de Caminha.</p>
      </section>
    </article>
  );
}

export default rightColumn;
