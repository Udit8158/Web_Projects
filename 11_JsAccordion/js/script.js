console.log("Welcome");

//Grab the accordion btns
const accordionBtn1 = document.querySelector('.accordion-btn1');
const accordionBtn2 = document.querySelector('.accordion-btn2');
const accordionBtn3 = document.querySelector('.accordion-btn3');

//Make a controller function
const accordionController = (index) => {
    console.log('clicked')
    let accordionPannel = document.querySelector(`.accordion-pannel${index}`);
    if (accordionPannel.style.display == "none"){
        accordionPannel.style.display = "block";
    } else {
        accordionPannel.style.display = "none";
    }
}

//Call the func in every btns
accordionBtn1.addEventListener('click',()=>{
    accordionController(1)
});
accordionBtn2.addEventListener('click',()=>{
    accordionController(2)
});
accordionBtn3.addEventListener('click',()=>{
    accordionController(3)
});

