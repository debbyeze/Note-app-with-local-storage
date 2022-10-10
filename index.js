let notes = [];
document.querySelector("form").onsubmit = (e) => {
  e.preventDefault();
  const title = document.getElementById("title");
  const desc = document.getElementById("desc");
  const date = document.getElementById("dob");
  console.log(title.value, desc.value, date.value);

  if (!title && title.trim === "" && !desc && desc.trim === "" && !date && date.trim === "") {
    return console.log("No Input");
  }
    addNote(title.value, desc.value, date.value)
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
      const caption = document.createElement("caption");
      h6.innerHTML = note.title;
      p.innerHTML = note.desc;
      caption.innerHTML = note.date;
      div.appendChild(h6);
      div.appendChild(p);
      div.appendChild(caption);
      li.appendChild(div);
      ul.appendChild(li);
  

    });
  }
}



window.onload = () => {
  showNotes();
};
