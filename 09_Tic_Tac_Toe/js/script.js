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

//Check win
let checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    //making array of win possibilities
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach( e => {
        console.log(e[2]);
        let boxtext = document.getElementsByClassName('boxtext');
        console.log(boxtext[e[2]]);  //these lines are for feel
        // console.log(boxtext);
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "") ){
            let info = document.querySelector(".info");
            info.innerText = `${boxtext[e[0]].innerText} Won`;
        }
    })
}
//Print the X or 0
boxes.forEach((e)=>{
    e.addEventListener("click",(element)=>{
        if (turn == "X") {
            element.target.innerText = "X";
            turn = "0";
            info.innerText = "Turn for 0";
            tingMusic.play();
            checkWin();
        }
        else {
            element.target.innerText = "0";
            turn = "X";
            info.innerText = "Turn for X";
            tingMusic.play();
            checkWin()
        }
    })
})

