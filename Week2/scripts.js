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

const slides = ["Delfins*GNR.jpg" , "Vapors_of_Morphone.jpg", "Xutos&Pontapes.jpeg", "AmaliaHoje.webp"];
let index = 0;
let timeOutId;
startSlideShow();
function next(){
    index = (index >= slides.length-1) ? 0 : index+1;
    changeSlide();
}
function previous() {
    index = (index <= 0) ? slides.length-1 : index-1;
    changeSlide();
}

function changeSlide(){
    clearTimeout(timeOutId)
    document.getElementById("slideshow").src="images/slideshow/"+slides[index];
    document.getElementById("slideshow_caption").textContent = slides[index].replace(/\.[^/.]+$/, "");
    startSlideShow();
}

function startSlideShow(){
    timeOutId = setTimeout(slideshow, 4500);
}

function slideshow(){
    next();
    timeOutId = setTimeout(slideshow, 4500);
}
