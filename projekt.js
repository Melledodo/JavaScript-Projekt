//Lillian
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  
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
// Get the modal
var ebModal = document.getElementById('mySizeChartModal');

// Get the button that opens the modal
var ebBtn = document.getElementById("mySizeChart");

// Get the <span> element that closes the modal
var ebSpan = document.getElementsByClassName("ebcf_close")[0];

// When the user clicks the button, open the modal 
ebBtn.onclick = function() {
    ebModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ebSpan.onclick = function() {
    ebModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == ebModal) {
        ebModal.style.display = "none";
    }
}


//Sarah

{var i = 0; //start point
var images = [];
var time = 2000;

// image list
images[0] = 'images/mailef-dobbel1.jpg';
images[1] = 'images/maileg-dobbel2.jpg';
images[2] = 'images/maileg-dobbel3.jpg';



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
