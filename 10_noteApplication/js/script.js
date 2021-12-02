console.log("Welcome to My Notes");


//Grab the elements
let title = document.getElementById("titleArea");
let text = document.getElementById("textArea");
let notes = localStorage.getItem("notes");
//Define the function
showNotes = ()=>{
    if (notes == null){
        notesArr = []; //creating a blank array
    }
    else{
        notesArr = JSON.parse(notes); //converts into array
    }
    let html = "";
    notesArr.forEach((element,index) => {
        console.log(element,index)
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.text}</p>
                <a href="#" class="btn btn-primary">Delete Note</a>
              </div>
            </div>
          </div>
        `
        let notesElem = document.getElementById("notes");
        if (notesArr.length != 0){
            notesElem.innerHTML = html;
        }
        else{
            notesElem.innerHTML = "Nothing to show";
        }
    });
}

addNoteFunction = ()=>{
    console.log("clicked");
    if (notes == null){
        notesArr = []; //creating a blank array
    }
    else{
        notesArr = JSON.parse(notes); //converts into array
    }
    let myObj = {
        title : title.value,
        text : text.value
    }
    notesArr.push(myObj) //pushing myObj on the notes array
    localStorage.setItem("notes",JSON.stringify(notesArr));
    title.value = "";
    text.value = "";
    showNotes();
}


showNotes();
//add click event on the add note button
let addNote = document.getElementById("addNote");
addNote.addEventListener("click",addNoteFunction);
