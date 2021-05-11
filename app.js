const nextBtn = document.querySelector("#nextBtn")
const prevBtn = document.querySelector("#prevBtn")
const imageDisplay = document.querySelectorAll('#imgdisplay')
const slide = document.querySelector(".slide")


// manual change image
nextBtn.addEventListener('click', () => {
    
    var currentImage = document.querySelector(".active");
    var nextImage = currentImage.nextElementSibling;

    if(nextImage){
        currentImage.classList.remove('active');
        nextImage.className = "active";
    } else {
        currentImage.classList.remove('active');
        imageDisplay[0].className = "active"
    }

});

prevBtn.addEventListener('click', () => {
    
    var currentImage = document.querySelector(".active");
    var prevImage = currentImage.previousElementSibling;
    
    if(prevImage){
        currentImage.classList.remove('active');
        prevImage.className = "active";
    }else{
        currentImage.classList.remove('active');
        slide.lastElementChild.className = "active"
    }
});


// autochange per 3seconds
// let i = 0;
// let images = [];
// let time = 3000;

// images[0] = 'mountain0.jpg';
// images[1] = 'mountain1.jpg';
// images[2] = 'mountain2.jpg';
// images[3] = 'mountain3.jpg';
// images[4] = 'mountain4.jpg';
// images[5] = 'mountain5.jpg';
// images[6] = 'mountain6.jpg';
// images[7] = 'mountain7.jpg';
// images[8] = 'mountain8.jpg';



// function changeImage(){
//     imageDisplay.setAttribute("src", images[i]);

//     if(i < images.length){
//         i++;
//     }else {
//         i=0;
//     }

//     setTimeout('changeImage()', time)
// }

// window.onload = changeImage;



// change using arrows
