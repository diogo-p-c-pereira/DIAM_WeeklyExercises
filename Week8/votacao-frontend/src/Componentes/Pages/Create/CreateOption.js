import {useState} from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "reactstrap";

function CreateOption() {
     const { questionId } = useParams();
    const ENDPOINT_URL = 'http://127.0.0.1:8000/votacao/api/options/' + questionId;
    const [text, setText] = useState("");
     const navigate = useNavigate();


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(ENDPOINT_URL, {"opcao_texto" : text, "questao" : questionId, "votos": 0 }).then();
        navigate("/detail/" + questionId);
    }

    return(
        <div className="container">
            <h1>Inserir uma nova questão</h1>
            <br/>
            <Form onSubmit={submitHandler}>
                <label>Texto da opção: </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                <br/><br/>
                <Button color="secondary" type="submit" > Submeter </Button>
                <Button color="secondary" onClick={() => navigate("/detail/" + questionId)}> Voltar </Button>
            </Form>
            <br/>
        </div>
    );
}

export default CreateOption;