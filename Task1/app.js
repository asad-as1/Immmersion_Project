const addBtn = document.getElementById("addBtn");
const container = document.getElementById("barsContainer");

addBtn.addEventListener("click", () => {
  const bar = document.createElement("div");
  bar.className = "progress-bar";

  const fill = document.createElement("div");
  fill.className = "fill";
  fill.style.width = `10%`; 

  bar.appendChild(fill);
  container.appendChild(bar);

  let x = 0;
  bar.addEventListener("click", () => {
    fill.style.width = `${x + 10}%`;
    x += 10;
  });

});