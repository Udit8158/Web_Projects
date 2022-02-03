console.log("Welcome");
// Make question and answers and options ready for quiz.

// Questions are in another file

// Grab elements
const mainContainer = document.querySelector(".mainContainer");
const questionContainer = document.querySelector(".questionContainer");
const optionContainer = document.querySelector(".optionContainer");
const optionsArr = document.querySelectorAll(".options");
const nextBtn = document.querySelector(".nextBtn");
const stopBtn = document.querySelector(".stopBtn");
const showResult = document.querySelector(".showResult");

// Define some variables
let questionIndex = 0;
let correctAnswer = 0;
let isFirstAttempt = true;
let defaultBtnColor = "rgb(49, 49, 190);";

// Define some functions

// Function for manupulation DOM ans generate the stuff
const questionAndOptionGenerator = () => {
  questionContainer.innerText = questions[questionIndex].question;
  optionsArr.forEach((element, index) => {
    element.children[0].innerText = questions[questionIndex].options[index];
  });
  // cheeckAnswer();
};

// To reset the buttons color
const reset = () => {
  optionsArr.forEach(
    (element) => (element.style.background = "rgb(49, 49, 190)")
  );
  isFirstAttempt = true;
};

// Cheecking Answer is correct or not

// TODO:  cheecking answer bug  (bug fixed)

const cheeckAnswer = function () {
  // cheeck and only mark for first time
  if (Number(this.id) === questions[questionIndex].answer && isFirstAttempt) {
    this.style.background = "Green";
    correctAnswer += 1;
    isFirstAttempt = false;
  } else if (isFirstAttempt) {
    this.style.background = "red";
    isFirstAttempt = false;
  }
  // To show the correct ans
  optionsArr[questions[questionIndex].answer].style.background = "green";
};

// Next quetion
const nextOuestion = () => {
  reset();
  if (questionIndex === questions.length - 1) {
    questionIndex = 0;
  } else {
    questionIndex += 1;
  }
  console.log("correct ans", correctAnswer);
  questionAndOptionGenerator();
};

// To stop the game
const stopGame = () => {
  console.log("clicked");
  console.log(correctAnswer);
  questionContainer.classList.add("hide");
  optionContainer.classList.add("hide");
  nextBtn.classList.add("hide");
  stopBtn.classList.add("hide");
  showResult.classList.remove("hide");
  showResult.innerText = `You give ${correctAnswer} correct answers out of ${questions.length} questions`;
  setTimeout(() => {
    document.location.reload();
  }, 5000);
};

// Call the function and event listner
nextBtn.addEventListener("click", nextOuestion);

optionsArr.forEach((element) => {
  // console.log(this);
  element.addEventListener("click", cheeckAnswer);
});
stopBtn.addEventListener("click", stopGame);
questionAndOptionGenerator();
