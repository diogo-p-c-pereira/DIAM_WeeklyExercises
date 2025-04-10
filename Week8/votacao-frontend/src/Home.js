import QuestionTable from "./Componentes/Pages/MainPage/QuestionTable";
import Header from "./Componentes/Header";
import {Container, Row, Col, Button} from "reactstrap";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Header />
            <Content/>
        </>
    );
}
function Content() {
    return (
    <Container style={{marginTop: "20px", maxWidth: "800px"}}>
        <Row>
            <Col>
                <QuestionTable/>
                <Link to={"/CreateQuestion"}>
                          <Button color="secondary">Criar nova questão</Button>
                </Link>
            </Col>
        </Row>
    </Container>
    );
}

export default Home;