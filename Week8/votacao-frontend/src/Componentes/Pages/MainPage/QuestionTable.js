import React, { useEffect, useState } from "react";
import { Table , Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function QuestionTable() {
  const URL_QUESTIONS = "http://localhost:8000/votacao/api/questions/"; // (1)
  const [questionList, setQuestionList] = useState([]); // (2)

  const getQuestions = () => { // (3)
    axios.get(URL_QUESTIONS)
      .then((request) => {
        setQuestionList(request.data);
      });
  };

  useEffect(() => { // (4)
    getQuestions();
  }, []);

  const centered = { textAlign: "center" };

  return (
      <Table light="true"> {/* (5) */}
          <thead>
          <tr>
              <th>Texto</th>
              <th style={centered}>Controls</th>
          </tr>
          </thead>
          <tbody>
          {questionList.map((q) => (
              <tr key={q.pk}>
                  <td>{q.questao_texto}</td>
                  <td style={{textAlign: "right"}}>
                      <Link to={`/detail/${q.pk}`}>
                          <Button color="warning" className="me-2">Detalhe</Button>
                      </Link>
                      <Link to={`/vote/${q.pk}`}>
                          <Button color="success">Votar</Button>
                      </Link>
                  </td>
              </tr>
          ))}
          </tbody>
      </Table>
  );
}

export default QuestionTable;
