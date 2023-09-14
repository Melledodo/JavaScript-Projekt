//Lillian

//Lisbeth

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
