import React, { useState , useEffect , useRef} from "react";
import {useNavigate} from "react-router-dom";
import "../../Assets/Style.css";
import artistasData from "../../Assets/ArtistasInfo.json";

function Inquiry() {
  const [ inquiryData, setInquiryData ] = useState({
    artistasFavoritos: [],
    diaPreferido: "",
    criticas: ""
  });

  const dias = ["21/Agosto", "22/Agosto", "23/Agosto", "24/Agosto"];
  const navigate = useNavigate();

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  if (type === "checkbox" && name === "artistasFavoritos") {
    setInquiryData((prevState) => {
      const updated = checked
        ? [...prevState.artistasFavoritos, value]
        : prevState.artistasFavoritos.filter((artista) => artista !== value);
      return { ...prevState, artistasFavoritos: updated };
    });
  } else {
    setInquiryData({ ...inquiryData, [name]: value });
  }
};

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inquiryData);
    //alert('Inquérito submetido com sucesso!');
      navigate("/InquiryResult", {state: {inquiry: inquiryData}});
  };

  return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>

            <h2>Inquérito ao público do Festival de Vilar de Mouros</h2>

            <div className="InquirySection">
                <label>Quais foram os artistas de que gostou no festival?</label>
                {artistasData.map((artista, index) => (
                    <div key={index}>
                        <input
                            type="checkbox"
                            name="artistasFavoritos"
                            value={artista.nome}
                            onChange={handleChange}
                            checked={inquiryData.artistasFavoritos.includes(artista.nome)}
                        />{artista.nome}
                    </div>
                ))}
            </div>
            <br/>

            <div className="InquirySectionHorizontal">
                <label>Qual o seu dia preferido para os concertos?</label>
                {dias.map((dias) => (
                    <div key={dias}>
                        <input
                            type="radio"
                            name="diaPreferido"
                            value={dias}
                            checked={inquiryData.diaPreferido === dias}
                            onChange={handleChange}
                        />{dias}
                    </div>
                ))}
            </div>
            <br/>
            <div className="InquirySectionHorizontal">
                <label>Críticas (o que não correu bem no festival):</label>
                <textarea
                    name="criticas"
                    value={inquiryData.criticas}
                    onChange={handleChange}
                />
            </div>

            <input className="submitButton_changed" type="submit" value="Submeter inquérito"/>
        </form>
    </div>
);
}

export default Inquiry;
