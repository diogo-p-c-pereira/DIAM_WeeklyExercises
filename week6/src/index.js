import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import LineUp from "./Pages/LineUp";
import FormVoluntario from "./Pages/FormVoluntario";
import InquiryFestival from "./Pages/InquiryFestival";
import InquiryResult from "./Pages/InquiryResult";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<NavigationRoutes/>);

function NavigationRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/FormVoluntario" element={<FormVoluntario/>}/>
                <Route path="/LineUp" element={<LineUp/>}/>
                <Route path="/InquiryFestival" element={<InquiryFestival/>}/>
                <Route path="/InquiryResult" element={<InquiryResult/>}/>
            </Routes>
        </BrowserRouter>
    )
}