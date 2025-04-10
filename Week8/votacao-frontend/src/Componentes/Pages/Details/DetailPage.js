import {useParams, useNavigate, Link} from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DetailData from "./DetailData";
import { Button } from "reactstrap";

function DetailPage() {
  const URL_QUESTIONS = "http://localhost:8000/votacao/api/questions/";
  const URL_OPTIONS = "http://localhost:8000/votacao/api/options/";

  const { questionId } = useParams();
  const [question, setQuestion] = useState(null);
  const [optionList, setOptionList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Vai buscar todas as questões e encontra a certa
    axios.get(URL_QUESTIONS)
      .then(response => {
        const found = response.data.find(q => q.pk == questionId);
        if (found) setQuestion(found);
        else navigate("/"); // redireciona para home se não encontrar
      });

    // Vai buscar as opções da questão
    axios.get(URL_OPTIONS + questionId)
      .then(response => setOptionList(response.data));
  }, [questionId, navigate]);

  if (!question) return <p>A carregar dados...</p>;

  return (
      <div className="container mt-4">
          <h3>Detalhe da Questão {questionId}</h3>
          <DetailData
              options={optionList}
              question={question}
          />
          <br/>
          <Link to={`/CreateOption/${questionId}/`}>
              <Button color="secondary" className="me-2">Criar opção</Button>
          </Link>
          <Button color="secondary" onClick={() => navigate("/")}>
              Voltar
          </Button>
      </div>
  );
}

export default DetailPage;
