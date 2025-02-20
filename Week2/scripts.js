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

const slideshow = ["Delfins.jpg" , "Vapors_of_Morphone.jpg", "Xutos&Pontapes.jpeg", "AmaliaHoje.webp"];
let index = 0;
function next(){
    index += (index >= slideshow.length-1) ? 0 : 1;
    changeSlideshow();
}
function previous() {
    index -= (index <= 0) ? 0 : 1;
    changeSlideshow();
}
function changeSlideshow(){
    document.getElementById("slideshow").src="images/slideshow/"+slideshow[index];
    document.getElementById("slideshow_caption").textContent = slideshow[index].replace(/\.[^/.]+$/, "");
}
