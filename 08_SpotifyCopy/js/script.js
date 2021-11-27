// Testing js 
console.log("Welcome to my own spotify clone");

// Testing audio 
let audioElement = new Audio('necessaryFiles/songs/1.mp3');
// audioElement.play();

// Initialize the variables
let songIndex = 0;  //initially songIndex is 0
let forwardBtn = document.getElementById("forwardBtn");
let playpauseBtn = document.getElementById("playpauseBtn");
let backwardBtn = document.getElementById("backwardBtn");
let myProgressBar = document.getElementById("myProgressBar");
let myGIF = document.getElementById("myGIF");
let musicNames = Array.from(document.getElementsByClassName("musicnames")) ;
let songItemPlay = document.getElementsByClassName("songItemPlay");
console.log(musicNames)

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "necessaryFiles/covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "necessaryFiles/covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "necessaryFiles/covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "necessaryFiles/covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "necessaryFiles/covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "necessaryFiles/covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "necessaryFiles/covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "necessaryFiles/covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "necessaryFiles/covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "necessaryFiles/covers/10.jpg"},
]
//Itreatins song array
musicNames.forEach((element,i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
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

// Time Update for myProgressBar (ProgressBar fuctionality)

audioElement.addEventListener('timeupdate', () => {
    // console.log("time is running");
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);   //To calculate the percent of song is done 
    // console.log(progress);
    myProgressBar.value = progress;
}
)

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = ((myProgressBar.value*audioElement.duration)/100);
})

Array.from(songItemPlay).forEach((element)=>{
    // console.log(element);
    element.addEventListener("click",(e)=>{
        // console.log(`clcked`,element.id)
        console.log(e);
        songIndex = e.target.id;
        let audio = new Audio(`necessaryFiles/songs/${songIndex}.mp3`); 
        // audioElement.play();
        console.log(audio.currentTime)
        if (audioElement.currentTime <= 0){
            audioElement.play();
            console.log("audio element was pasued")
            // console.log(e.target.classList);
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");
            audioElement = new Audio(`necessaryFiles/songs/${songIndex}.mp3`); 
        }
        else {
            audioElement = new Audio(`necessaryFiles/songs/${songIndex}.mp3`); 
            console.log("audio element was not paused")
            audioElement.pause();
            e.target.classList.remove("fa-pause-circle");
            e.target.classList.add("fa-play-circle");
        }
    })
})

