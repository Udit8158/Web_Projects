console.log("Welcome");

// Grab elements
const addNoteBtn = document.querySelector(".add-note-btn");
const smallNoteViewContainer = document.querySelector(
  ".small-note-view-container"
);
const previewContainer = document.querySelector(".preview-container");
const previewNoteTitle = document.querySelector(".note-title");
const previewNoteBody = document.querySelector(".note-body");

//Declare important variables
const notesData = localStorage.getItem("notesData");
let indexToSave = 0;
let indexToDelete = 0;
// Time stuff
let date = new Date();
console.log(date.toString().substring(0, 21));
// Creating functions
const showNote = () => {
  if (notesData === null) {
    notesArr = [];
  } else {
    notesArr = JSON.parse(notesData);
  }
  let html = "";
  notesArr.forEach((element, index) => {
    html += `
      <div class="small-note-view" id="${index}">
            <div class="small-note-title">${element.noteTitle}</div>
            <div class="small-note-body">${element.noteBody}</div>
            <div class="small-note-btns">
              <div class="delete-btn" >
                <i class="fa fa-trash-o" style="font-size: 24px"></i>
              </div>
              <div class="save-btn"  >
                <i class="fa fa-save" style="font-size: 24px"></i>
              </div>
            </div>
            <div class="time-update">Time</div>
          </div>
      `;
  });
  if (notesArr.length != 0) {
    Array.from(previewContainer.children).forEach((e) => {
      e.classList.add("hide");
    });
    smallNoteViewContainer.innerHTML = html;
  } else {
    Array.from(previewContainer.children).forEach((e) => {
      e.classList.add("hide");
    });
    smallNoteViewContainer.innerHTML = "You donot have notes to show.";
  }
};
showNote(); // Call this function when the website is start

const saveNote = () => {};

// Event listners
addNoteBtn.addEventListener("click", () => {
  if (notesData === null) {
    notesArr = [];
  } else {
    notesArr = JSON.parse(notesData);
  }
  let myObj = {
    noteTitle: "I am note title",
    noteBody: "I am note body",
  };
  notesArr.push(myObj);
  localStorage.setItem("notesData", JSON.stringify(notesArr));
  document.location.reload();
  showNote();
});

// Active class adding and removing stuff
Array.from(smallNoteViewContainer.children).forEach((smallNote) => {
  smallNote.addEventListener("click", function () {
    // set preview as the small note
    previewNoteTitle.value = notesArr[this.id].noteTitle;
    previewNoteBody.innerText = notesArr[this.id].noteBody;

    // Show the preview container after clicking the small note
    Array.from(previewContainer.children).forEach((e) => {
      e.classList.remove("hide");
    });

    // Method to remove active class from the unclicked small notes
    let newFilteredArr = Array.from(smallNoteViewContainer.children).filter(
      (e) => e.id != this.id
    );
    newFilteredArr.forEach((e) => e.classList.remove("active-note"));

    // then add the active class in the clicked small note
    this.classList.add("active-note");
  });
});

// Save note functionality on smallnotes
const saveBtns = document.querySelectorAll(".save-btn");

saveBtns.forEach((saveBtnIndividual) => {
  saveBtnIndividual.addEventListener("click", function () {
    console.log("clicked");
    notesArr = JSON.parse(localStorage.getItem("notesData"));
    let myObj = {
      noteTitle: previewNoteTitle.value,
      noteBody: previewNoteBody.value,
    };
    indexToSave = this.parentElement.parentElement.id;
    console.log(indexToSave);
    notesArr.splice(indexToSave, 1, myObj); // For update
    localStorage.setItem("notesData", JSON.stringify(notesArr));
    document.location.reload(); // TODO: How to avoid reload
    showNote();
  });
});

// Adding the delete functionality on the small note
const deleteBtns = document.querySelectorAll(".delete-btn");

deleteBtns.forEach((deleteBtnIndividual) => {
  deleteBtnIndividual.addEventListener("click", function () {
    notesArr = JSON.parse(localStorage.getItem("notesData"));
    indexToDelete = this.parentElement.parentElement.id;
    notesArr.splice(indexToDelete, 1); // For delete
    localStorage.setItem("notesData", JSON.stringify(notesArr));
    document.location.reload();
  });
});
