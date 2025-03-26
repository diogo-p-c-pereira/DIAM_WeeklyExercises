import "../../Assets/Style.css";
import {useLocation, useNavigate} from 'react-router-dom';
function Result() {
    const location = useLocation();
    const inquiry = location.state.inquiry;

    return(
        <div className="form-container">
            <div className="inquiry-result">
                <h2>Resultados do Inquérito</h2>
                <h3>Artistas Favoritos:</h3>
                <h4>{inquiry.artistasFavoritos.map((artista) => (<div>{artista} <br/></div>))}</h4>
                <br/>
                <h3>Dia Favorito:</h3>
                <h4>{inquiry.diaPreferido}</h4>
                <br/>
                <h3>Criticas:</h3>
                <h4>{inquiry.criticas}</h4>
                <br/>
            </div>
        </div>
    );
}

export default Result;