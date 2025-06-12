let btn = document.getElementById("btn");
let cont = document.getElementsByClassName("cont");
let notesList = document.getElementsByClassName("notesList")[0];


btn.addEventListener("click", function() {
   let textArea = document.createElement("textArea");
   textArea.className = "textArea";
   notesList.appendChild(textArea)
});