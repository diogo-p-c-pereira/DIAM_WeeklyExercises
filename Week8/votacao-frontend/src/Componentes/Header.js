function Header() {
  return (
    <div className="text-center">
      <img
        src = "/imagens/iscte_photo1.jpg" // (1)
        width="400"
        alt="ISCTE"
        className="img-thumbnail"
        style={{ marginTop: "20px" }} // (2)
      />
      <h2>Perguntas com Opcoes</h2>
      <h3>Integração de Django com React</h3>
    </div>
  );
}

export default Header;
