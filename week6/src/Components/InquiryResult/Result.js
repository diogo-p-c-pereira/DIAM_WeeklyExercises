import "../../Assets/Style.css";
import {useLocation, useNavigate} from 'react-router-dom';
function Result() {
    const location = useLocation();
    const inquiry = location.state.inquiry;

    return(
        <div className="form-container">
            <div className="inquiry-result">
                <h1>Resultados do Inquérito</h1>
                <h3>Artistas Favoritos:</h3>
                {inquiry.artistasFavoritos.map((artista) => (<div>{artista} <br/></div>))}
                <br/>
                <h3>Dia Favorito:</h3>
                {inquiry.diaPreferido}
                <br/>
                <h3>Criticas:</h3>
                {inquiry.criticas}
            </div>
        </div>
    );
}

export default Result;