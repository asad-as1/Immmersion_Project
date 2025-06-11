const addBtn = document.getElementById("addBtn");
const container = document.getElementById("barsContainer");

addBtn.addEventListener("click", () => {
  const bar = document.createElement("div");
  bar.className = "progress-bar";

  const fill = document.createElement("div");
  fill.className = "fill";
  fill.style.width = `${Math.floor(Math.random() * 100) + 1}%`; 

  bar.appendChild(fill);
  container.appendChild(bar);

});
