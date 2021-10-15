// Testing js 
console.log("Welcome to my own spotify clone");

// Testing audio 
let audioElement = new Audio('/necessaryFiles/songs/1.mp3');
// audioElement.play();

// Initialize the variables
let songIndex = 0;
let forwardBtn = document.getElementById("forwardBtn");
let playpauseBtn = document.getElementById("playpauseBtn");
let backwardBtn = document.getElementById("backwardBtn");
let myProgressBar = document.getElementById("myProgressBar");
let myGIF = document.getElementById("myGIF");;

// Events 

//Play Pause controll 
playpauseBtn.addEventListener('click',()=>{                    //This is writtern in arrow function
    if (audioElement.paused || audioElement.currentTime <= 0){                //  '||' means 'or'
        audioElement.play();
        playpauseBtn.classList.remove("fa-play-circle");
        playpauseBtn.classList.add("fa-pause-circle");
        myGIF.style.opacity=1;
    }
    else {
        audioElement.pause();
        playpauseBtn.classList.remove("fa-pause-circle");
        playpauseBtn.classList.add("fa-play-circle");
        myGIF.style.opacity=0;
    }
})

// Time Update for myProgressBar 

audioElement.addEventListener('timeupdate', () => {
    console.log("time is running");
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);   //To calculate the percent of song is done 
    // console.log(progress);
    myProgressBar.value = progress;
}
)

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = ((myProgressBar.value*audioElement.duration)/100);
})

