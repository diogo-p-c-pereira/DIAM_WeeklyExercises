import React from 'react';
import LineUpGallery from "../Components/LineUp/LineUpGallery";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LineUp() {
  return (
      <div className={"Components"}>
          <Header/>
          <LineUpGallery/>
          <Footer/>
      </div>
  );
}

export default LineUp;