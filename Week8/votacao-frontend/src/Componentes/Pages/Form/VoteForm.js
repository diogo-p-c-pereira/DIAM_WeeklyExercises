import { useState } from "react";
import { Button, Form, FormGroup, Table, Label } from "reactstrap";
import axios from "axios";
import moment from "moment";

function VoteForm({ options, question, toggle }) {
  const URL_OPTION = "http://localhost:8000/votacao/api/option/"; // (1)
  const [selectedOption, setSelectedOption] = useState(-1); // (2)

  const voteAndCloseModal = (event) => { // (3)
    event.preventDefault();
    if (selectedOption >= 0) {
      // Atualiza localmente os votos
      const updatedOption = {
        ...options[selectedOption],
        votos: options[selectedOption].votos + 1,
      };

      // Envia para a API
      axios.put(URL_OPTION + updatedOption.pk, updatedOption).then(() => {
        toggle();
      });
    }
  };

  const optionChangeHandler = (event) => { // (4)
    const optionId = parseInt(event.target.value);
    setSelectedOption(optionId);
  };

  return (
    <>
      <Form onSubmit={voteAndCloseModal}> {/* (5) */}
        <FormGroup>
          <b>Texto:</b>
          <p>{question.questao_texto}</p>
          <b>Data de publicação:</b>
          <p>{moment(question.pub_data).format("YYYY-MM-DD HH:mm")}</p>
        </FormGroup>

        <FormGroup>
          <Table>
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>Opção</th>
              </tr>
            </thead>
            <tbody>
              {options.map((o, index) => ( // (6)
                <tr key={index}>
                  <td style={{ textAlign: "left" }}>
                    <FormGroup check>
                      <Label check>
                        <input
                          type="radio"
                          name="react-radio"
                          className="form-check-input"
                          value={index}
                          checked={selectedOption === index}
                          onChange={optionChangeHandler}
                        />
                        {" "}{o.opcao_texto}
                      </Label>
                    </FormGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </FormGroup>

        <Button type="submit">Submeter</Button> {/* (5) */}
      </Form>
    </>
  );
}

export default VoteForm;
