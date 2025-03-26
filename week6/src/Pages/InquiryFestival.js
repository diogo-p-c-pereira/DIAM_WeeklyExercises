import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Inquiry from "../Components/InquiryFestival/Inquiry";

function InquiryFestival() {
  return (
      <div className={"Components"}>
          <Header/>
          <br/>
          <Inquiry/>
          <br/>
          <Footer/>
      </div>
  );
}

export default InquiryFestival;