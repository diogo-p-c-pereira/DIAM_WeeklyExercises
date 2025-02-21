// function to validate the text area
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

// event listener for the image to disappear when the mouse is over it
document.addEventListener("DOMContentLoaded", function () {
    let image = document.getElementById("festivalImage");

    image.addEventListener("mouseover", function () {
        image.style.opacity = "0";
    });

    image.addEventListener("mouseout", function () {
        image.style.opacity = "1";
    });
});

// functions to change the image in the slideshow using buttons and automatic change
const slides = ["DelfinsGNR.jpg" , "Vapors_of_Morphone.jpg", "Xutos&Pontapes.jpeg", "AmaliaHoje.webp"];
let index = 0;
let timeOutId;
slideShow();
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
    document.getElementById("slideshow_caption").textContent = slides[index].split(".")[0];
    slideShow();
}

function slideShow(){
    timeOutId = setTimeout(next, 4500);
}
