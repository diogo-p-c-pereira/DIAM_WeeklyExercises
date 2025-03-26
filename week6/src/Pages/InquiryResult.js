import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Result from "../Components/InquiryResult/Result";

function InquiryResult() {
  return (
      <div className={"Components"}>
          <Header/>
          <Result/>
          <Footer/>
      </div>
  );
}

export default InquiryResult;