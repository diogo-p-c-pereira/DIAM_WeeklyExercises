function validate(){
    const badWords = ["Abécula", "Abentesma", "Achavascado", "Alimária", "Andrajoso", "Barregã", "Cacóstomo",
                        "Cuarra", "Estólido", "Estroso", "Estultilóquio", "Nefelibata", "Néscio", "Pechenga",
                        "Sevandija", "Somítico", "Tatibitate", "Xexé", "Xexelento"];
    let text = document.getElementById("area").value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();//Normalize to remove diacritical signs and to lower case
    for(let word of badWords){
        word = word.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
        if(text.includes(word)){
            alert("Badword found!");
            document.getElementById("area").value="";
            return;
        }
    }
    alert("Text Valid");
}