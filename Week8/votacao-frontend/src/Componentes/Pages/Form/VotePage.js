import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import VoteForm from "./VoteForm";
import { Button } from "reactstrap";

function VotePage() {
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
        else navigate("/");
      });

    // Vai buscar as opções
    axios.get(URL_OPTIONS + questionId)
      .then(response => setOptionList(response.data));
  }, [questionId, navigate]);

  if (!question) return <p>A carregar dados...</p>;

  return (
    <div className="container mt-4">
      <h3>Votar na Questão {questionId}</h3>
      <VoteForm
        options={optionList}
        question={question}
        toggle={() => {}} // não usamos modal
      />
        <br/>
      <Button color="secondary" onClick={() => navigate("/")}>
        Voltar
      </Button>
    </div>
  );
}

export default VotePage;
