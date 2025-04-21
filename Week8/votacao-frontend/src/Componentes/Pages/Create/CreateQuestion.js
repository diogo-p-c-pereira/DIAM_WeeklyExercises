import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { Button, Form } from "reactstrap";

function CreateQuestion() {
    const ENDPOINT_URL = 'http://127.0.0.1:8000/votacao/api/questions/';
    const [text, setText] = useState("");
     const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const pubDate = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss.SSSSSS");
        axios.post(ENDPOINT_URL, {"questao_texto" : text, "pub_data": pubDate}).then( () => navigate("/") );
    }

    return(
        <div className="container">
            <h1>Inserir uma nova questão</h1>
            <br/>
            <Form onSubmit={submitHandler}>
                <label>Texto da questão: </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                <br/><br/>
                <Button color="secondary" type="submit" > Submeter </Button>
                <Button color="secondary" onClick={() => navigate(-1)}> Voltar </Button>
            </Form>

        </div>
    );
}

export default CreateQuestion;