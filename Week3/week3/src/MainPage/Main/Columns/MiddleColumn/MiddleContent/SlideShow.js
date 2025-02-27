import "../../../../../Assets/Style.css";

function slideShow() {
  return (
    <article>
      <figure>
        <button className="button" onClick={previous}> &#60; </button>
        <img className="slide" src="images/slideshow/DelfinsGNR.jpg" id="slideshow" alt="Slideshow image not found!"
             width="70%"/>
        <button className="button" onClick={next}> &#62; </button>
        <figcaption id="slideshow_caption">DelfinsGNR</figcaption>
      </figure>
    </article>
  );
}

// functions to change the image in the slideshow using buttons and automatic change
const slides = ["DelfinsGNR.jpg" , "Vapors_of_Morphone.jpg", "Xutos&Pontapes.jpeg", "AmaliaHoje.webp"];
let index = 0;
let timeOutId;
show();
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
    show();
}

function show(){
    timeOutId = setTimeout(next, 4500);
}


export default slideShow;
