console.log('Welcome');

//Defining some variables
let index = 0;
let slides = document.querySelectorAll('.slide');

//Defining some functions
let slideShow = (num) => {
    //Hide previously showing img
    slides.forEach((slide)=>{
        // console.log(slide);
        slide.style.display = "none";
    });
    //View the latest img

    if (num == slides.length){
        //reset the values
        num = 0;
        index = 0;
    }
    if (num < 0){
        num = slides.length - 1;
        index = slides.length - 1;
    }
    slides[num].style.display = "block";
}
//function to controll arrows
let slideController = (incriment) =>{
    index = index + incriment ;
    slideShow(index);
}

//call the function
slideShow(index);