import React from 'react';
import LineUpGallery from "../Components/LineUp/LineUpGallery";
import Header from "../Components/Header";
import Footer from "../Components/Footer"; // Importa o ficheiro JSON

function LineUp() {
  return (
      <div className={"Components"}>
          <Header/>
          <LineUpGallery/>
          <Footer/>
      </div>
  );
}

export default Homepage;