import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import LineUp from "./Pages/LineUp";
import FormVoluntario from "./Pages/FormVoluntario";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<NavigationRoutes/>);

function NavigationRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/FormVoluntario" element={<FormVoluntario/>}/>
                <Route path="/LineUp" element={<LineUp/>}/>
            </Routes>
        </BrowserRouter>
    )
}