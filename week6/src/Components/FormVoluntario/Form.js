import "../../Assets/Style.css";
import { useState } from 'react';

function VoluntarioForm() {

    const [formData, setFormData] = useState({
        nome: "",
        contacto: "",
        horario: "",
        comentario: ""
    });
    const [ validation , setValidation ] = useState(false);
    const badWords = ["Abécula", "Abentesma", "Achavascado", "Alimária", "Andrajoso", "Barregã", "Cacóstomo",
                        "Cuarra", "Estólido", "Estroso", "Estultilóquio", "Nefelibata", "Néscio", "Pechenga",
                        "Sevandija", "Somítico", "Tatibitate", "Xexé", "Xexelento"];


    // tira os acentos e converte o texto para minusculas
    const normalizeText = (text) => {
        return text.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        if( e.target.name === "comentario" ){
            const normalizedText = normalizeText(e.target.value);
            let containsBadWord = badWords.some(word => normalizedText.includes( normalizeText(word) ));
            setValidation(containsBadWord);
        }

    };

    const handleSubmit = () => {
        alert(`Obrigado ${formData.nome} pela sua inscrição, em breve será contactado pela organização do festival.`);
    }


    return (
        <div className="form-container">
            <div>
                <form onSubmit={handleSubmit}>

                    <h2>Formulário de Candidatura a Voluntário</h2>

                    <label>Nome:</label>
                    <input name="nome" required type="text" value={formData.nome} onChange={handleChange}/>
                    <br/>

                    <label>Contacto:</label>
                    <input name="contacto" required type="text" value={formData.contacto} onChange={handleChange}/>
                    <br/>

                    <label>Disponibilidade: </label>
                    <input required type="text" list="horarios" name={"horario"} value={formData.horario}
                           onChange={handleChange}/>
                    <datalist id="horarios">
                        <option value="21 Agosto - 19:00 - 23:30"/>
                        <option value="22 Agosto - 19:00 - 23:30"/>
                        <option value="23 Agosto - 19:00 - 23:30"/>
                        <option value="24 Agosto - 19:00 - 23:30"/>
                    </datalist>
                    <br/>

                    <label>Comentário: </label>
                    <textarea name="comentario" value={formData.comentario} onChange={handleChange}></textarea><br/>
                    {validation && <span style={{color: "red"}}> Comentário um bocado mauzinho :( </span>}

                    <input className="submitButton_changed" type="submit" value="Enviar Candidatura"
                           disabled={validation}
                           style={{opacity: validation ? 0.2 : 1, // altera a opacidade do butao para dar um efeito visual de desativado
                               pointerEvents: validation ? "none" : "auto"}} // desativa a parte do "hover" do butao
                    />

                    <br/><br/>

                </form>
            </div>
        </div>
    );
}
export default VoluntarioForm;