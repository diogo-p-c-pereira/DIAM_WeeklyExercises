import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import QuestionTable from "./Componentes/Pages/MainPage/QuestionTable";
import DetailPage from "./Componentes/Pages/Details/DetailPage";
import VotePage from "./Componentes/Pages/Form/VotePage";
import CreateQuestion from "./Componentes/Pages/Create/CreateQuestion";
import CreateOption from "./Componentes/Pages/Create/CreateOption";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:questionId" element={<DetailPage />} />
          <Route path="/vote/:questionId" element={<VotePage />} />
            <Route path="/CreateQuestion" element={<CreateQuestion />} />
            <Route path="/CreateOption/:questionId" element={<CreateOption />} />
        </Routes>
    </BrowserRouter>
  );
}