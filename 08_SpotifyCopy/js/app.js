console.log("Welcome");
// Make a songs array
const songs = [
  {
    songName: "Warriyo - Mortals [NCS Release]",
    filePath: "../necessaryFiles/songs/1.mp3",
    coverPath: "necessaryFiles/covers/1.jpg",
    duration: "03:50",
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "necessaryFiles/songs/2.mp3",
    coverPath: "necessaryFiles/covers/2.jpg",
    duration: "02:33",
  },
  {
    songName: "DEAF KEV - Invincible [NCS Release]-320k",
    filePath: "necessaryFiles/songs/3.mp3",
    coverPath: "necessaryFiles/covers/3.jpg",
    duration: "04:33",
  },
  {
    songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
    filePath: "necessaryFiles/songs/4.mp3",
    coverPath: "necessaryFiles/covers/4.jpg",
    duration: "04:27",
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
    filePath: "necessaryFiles/songs/5.mp3",
    coverPath: "necessaryFiles/covers/5.jpg",
    duration: "03:28",
  },
  {
    songName: "Rabba - Salam-e-Ishq",
    filePath: "necessaryFiles/songs/2.mp3",
    coverPath: "necessaryFiles/covers/6.jpg",
    duration: "03:28",
  },
  {
    songName: "Sakhiyaan - Salam-e-Ishq",
    filePath: "necessaryFiles/songs/2.mp3",
    coverPath: "necessaryFiles/covers/7.jpg",
    duration: "04:33",
  },
  {
    songName: "Bhula Dena - Salam-e-Ishq",
    filePath: "necessaryFiles/songs/2.mp3",
    coverPath: "necessaryFiles/covers/8.jpg",
    duration: "03:50",
  },
  {
    songName: "Tumhari Kasam - Salam-e-Ishq",
    filePath: "necessaryFiles/songs/2.mp3",
    coverPath: "necessaryFiles/covers/9.jpg",
    duration: "03:28",
  },
  {
    songName: "Na Jaana - Salam-e-Ishq",
    filePath: "necessaryFiles/songs/4.mp3",
    coverPath: "necessaryFiles/covers/10.jpg",
    duration: "04:27",
  },
];

// Audio Elemnt
let songIndex = 0;
let audioElement = new Audio(songs[`${songIndex}`].filePath);
console.log(audioElement);
// audioElement.play();

// Grab elements
const musicElementsArr = document.querySelectorAll(".musicnames");
const playpauseBtn = document.querySelector("#playpauseBtn");
const backwardBtn = document.querySelector("#backwardBtn");
const forwardBtn = document.querySelector("#forwardBtn");
const myGIF = document.querySelector("#myGIF");
const displayMusicName = document.querySelector("#displayMusicName");
const myProgressBar = document.querySelector("#myProgressBar");

// Declare useful variables
let musicPlay = false;
// Manupulate DOM songs
musicElementsArr.forEach((element, index) => {
  // console.log(element);
  element.children[0].src = songs[index].coverPath;
  element.children[1].innerText = songs[index].songName;
  element.children[2].innerText = songs[index].duration;

  element.children[3].addEventListener("click", function () {
    console.log("Clicked on", this);

    // TODO: Solve individual song play bug
    let individualSongPlay = false;
    if (!individualSongPlay) {
      songIndex = Number(this.id) - 1;
      audioElement = new Audio(songs[`${songIndex}`].filePath);
      playSong();
      // this.classList.remove("fa-play-circle");
      // this.classList.add("fa-pause-circle");
      individualSongPlay = true;
    } else {
      songIndex = Number(this.id) - 1;
      audioElement = new Audio(songs[`${songIndex}`].filePath);
      pauseSong();
      // this.classList.remove("fa-pause-circle");
      // this.classList.add("fa-play-circle");
      individualSongPlay = false;
    }
  });
});

const playSong = () => {
  audioElement.play();
  playpauseBtn.classList.remove("fa-play-circle");
  playpauseBtn.classList.add("fa-pause-circle");
  myGIF.style.opacity = 1;
  displayMusicName.innerText = songs[songIndex].songName;
  // myProgressBar.value = 0;

  musicElementsArr[songIndex].children[3].classList.remove("fa-play-circle");
  musicElementsArr[songIndex].children[3].classList.add("fa-pause-circle");

  // To controll myProgressBar
  controllProgressBar();
};

const pauseSong = () => {
  audioElement.pause();
  playpauseBtn.classList.add("fa-play-circle");
  playpauseBtn.classList.remove("fa-pause-circle");
  myGIF.style.opacity = 0;
  displayMusicName.innerText = "";

  musicElementsArr[songIndex].children[3].classList.remove("fa-pause-circle");
  musicElementsArr[songIndex].children[3].classList.add("fa-play-circle");
};
// controll music

// Play-Pause
playpauseBtn.addEventListener("click", () => {
  if (!musicPlay) {
    playSong();
    musicPlay = true;
    console.log(myGIF.style.opacity);
  } else {
    pauseSong();
    musicPlay = false;
  }
});
// Forward music
forwardBtn.addEventListener("click", () => {
  pauseSong();
  songIndex += 1;
  if (songIndex >= songs.length) {
    songIndex = 0;
  }
  // console.log("val of progress:", myProgressBar.value);
  // // myProgressBar.value = 0;
  // console.log("val 2 of progress:", myProgressBar.value);
  audioElement = new Audio(songs[`${songIndex}`].filePath);
  // console.log(audioElement);
  playSong();
});
// Backward music
backwardBtn.addEventListener("click", () => {
  myProgressBar.value = 0;
  console.log("clicked");
  pauseSong();
  songIndex -= 1;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  audioElement = new Audio(songs[`${songIndex}`].filePath);
  // console.log(audioElement);
  playSong();
});

// TODO: problem in reset in next and prev song (Problem solved)
// My progress bar making
function controllProgressBar() {
  audioElement.addEventListener("timeupdate", () => {
    // console.log("time is running");
    progress = parseInt(
      (audioElement.currentTime / audioElement.duration) * 100
    ); //To calculate the percent of song is done
    // console.log(progress);
    myProgressBar.value = progress;
  });

  myProgressBar.addEventListener("change", () => {
    audioElement.currentTime =
      (myProgressBar.value * audioElement.duration) / 100;
  });
}
