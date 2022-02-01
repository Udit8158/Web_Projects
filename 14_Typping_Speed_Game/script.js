// Grab some element

const timer = document.querySelector("#timer");
const quoteDisplay = document.querySelector("#quoteDisplay");
const quoteInput = document.querySelector("#quoteInput");
const btn = document.querySelector(".btn");
const wpmElement = document.querySelector("#wpmElement");

// Declare some global variable
const quoteUrl = "http://api.quotable.io/random";

let wordCount = 0;

// Dfining some function

// Fetched randomQoute from server
const getRandomQoute = () => {
  return fetch(quoteUrl)
    .then((response) => response.json())
    .then((data) => data.content);
};

// Render a new quote in the quote display section

const renderQoute = async () => {
  let qoute = await getRandomQoute();
  quoteInput.value = "";
  quoteDisplay.innerHTML = "";
  // let qouteArr = Array.from(qoute);
  let qouteArr = qoute.split("");
  qouteArr.forEach((element) => {
    // console.log(element);
    const span = document.createElement("span");
    span.innerText = element;
    // console.log(span);
    quoteDisplay.appendChild(span);
    // quoteDisplay.innerHTML = span;
  });
};

// After writting properly go to the next

const nextQoute = () => {
  if (quoteDisplay.innerText === quoteInput.value) {
    // controll wordCount
    wordCount += quoteInput.value.split(" ").length;
    console.log(wordCount);
    renderQoute();
  }
};

// Cheecking the next qoute condition in every second
// So here might some delay of milisecond,so it is not optimized very much
setInterval(() => {
  nextQoute();
}, 1000);

renderQoute();

// Adding evenlistner
btn.addEventListener("click", () => {
  // Start the timer
  let time = 0;
  setInterval(() => {
    timer.innerText = time;
    time = time + 1;
  }, 1000);

  // Btn stuff
  if (btn.innerText === "Start Writting") {
    btn.innerText === "Stop Writting";
    quoteInput.focus();
    btn.innerText = "Stop Writting";
  } else {
    btn.innerText = "Start Writting";
    // Grab the current time
    let currentTime = timer.innerText;
    timer.style.display = "none";

    // Controll wordCount

    inputWords = quoteInput.value.split(" "); // Make an array of typped words
    // console.log("word arr :", inputWords);
    wordCount += inputWords.length; // Track of word counts
    console.log("word count :", wordCount);
    // Manupulate the DOM of the text of displaying wpm
    wpmElement.parentElement.style.display = "block";
    console.log("current time :", currentTime);
    let wpmCount = Math.floor((wordCount / Number(currentTime)) * 60);
    wpmElement.innerText = wpmCount;

    // Refresh the page after sometime of finishing the game,as timer is running behind ("It is not good stuff")
    setTimeout(() => {
      location.reload();
    }, 10000);
  }
});

// Input stuff

quoteInput.addEventListener("input", () => {
  // Selecting the spans of array of quote
  const spanArrayQuote = quoteDisplay.querySelectorAll("span");
  spanArrayQuote.forEach((spanElement, index) => {
    // console.log(spanElement);
    // if (quoteInput.value[index] == null) {
    // } else if (quoteInput.value[index] === spanElement.innerText) {
    //   spanElement.classList.add("correct");
    //   spanElement.classList.remove("incorrect");
    // } else {
    //   spanElement.classList.add("incorrect");
    //   spanElement.classList.remove("correct");
    // }

    // Condition for right or wrong in more optimized way
    if (
      quoteInput.value[index] !== null &&
      quoteInput.value[index] === spanElement.innerText
    ) {
      spanElement.classList.add("correct");
      spanElement.classList.remove("incorrect");
    } else if (quoteInput.value[index] == null) {
      spanElement.classList.remove("incorrect");
      spanElement.classList.remove("correct");
    } else {
      spanElement.classList.add("incorrect");
      spanElement.classList.remove("correct");
    }
  });
});
