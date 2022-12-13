let notes = [];
document.querySelector("form").onsubmit = (e) => {
  e.preventDefault();
  const title = document.getElementById("title");
  const desc = document.getElementById("desc");
  const date = document.getElementById("dob");
  console.log(title.value, desc.value, date.value);

  if ( title.value == "" && desc.value == ""  && date.value == "") {
    return console.log("No Input");
  } else{
      addNote(title.value, desc.value, date.value)
  }
    
};

function addNote(title, desc, date) {
  const newNote = { title, desc, date, id: Date.now() };
  notes.push(newNote);
  localStorage.setItem("notes", JSON
    .stringify(notes));
  console.log("notes");
  showNotes();
}
function showNotes() {
  if (localStorage.getItem("notes")) {
    notes = JSON.parse(localStorage.getItem("notes"));
    console.log("notes");
    const container = document.getElementById("notes-container");
    container.style.display = "block";
    const ul = document.querySelector("ul");
    document.querySelectorAll("li").forEach((child) => child.remove());
    notes.forEach((note) => {
      const li = document.createElement("li");
      const div = document.createElement("div");
      const h6 = document.createElement("h6");
      const p = document.createElement("p");
      const span = document.createElement("span");
      const dele = document.createElement("button");
      dele.innerText = "delete";
      h6.innerHTML = note.title;
      p.innerHTML = note.desc;
      span.innerHTML ="Scheduled Date: " + note.date;
      div.appendChild(h6);
     div.appendChild(span);
      div.appendChild(p);
      div.appendChild(dele);
      li.appendChild(div);
      ul.appendChild(li);
  

    });
  }
}



window.onload = () => {
  showNotes();
};

// const btn = document.getElementsByTagName("button");

// for(var i=0; i > btn; i++){
//  var button = btn[i];
//  var deleteDiv = button.parentElement;
//  button.addEventListener.onclick() =>{
//   notes.pop(newNote)
//  }
// }