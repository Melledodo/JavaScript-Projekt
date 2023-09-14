//Lillian

//Lisbeth
let slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
   showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides [slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


//Cecilie

//Sarah

{var i = 0; //start point
var images = [];
var time = 2000;

// image list
images[0] = 'mailef-dobbel1.jpg';
images[1] = 'maileg-dobbel2.jpg';
images[2] = 'maileg-dobbel3.jpg';



// change image
function changeImg(){
    document.slide1.src = images[i];

    if(i < images.length - 1){
       i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);

}
window.onload =changeImg;
}

//Michelle
function besked1(){
let msg = document.getElementById('besked').value + " er nu tilmeldt nyhedsbrev";
alert(msg);
}
