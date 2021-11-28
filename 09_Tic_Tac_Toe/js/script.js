console.log("welcome in My TicTacToe");

//Grab the required elements
let boxes = Array.from(document.querySelectorAll(".box"));  //array of boxes
let boxText = Array.from(document.querySelectorAll(".boxtext")); //array of boxtext
let info = document.querySelector(".info");
let imgbox = document.querySelector(".imgbox")
let resetButton = document.getElementById("reset");
let tingMusic = new Audio("ting.mp3"); //play sound
let gameOverMusic = new Audio("gameover.mp3"); //gameover music

//Initialize others variables
let turn = "X";

//Hide the image gif initially
imgbox.style.display = "none";
//Print the X or 0
boxes.forEach((e)=>{
    e.addEventListener("click",(element)=>{
        if (turn == "X") {
            element.target.innerText = "X";
            turn = "0";
            info.innerText = "Turn for 0";
        }
        else {
            element.target.innerText = "0";
            turn = "X";
        }
    })
})