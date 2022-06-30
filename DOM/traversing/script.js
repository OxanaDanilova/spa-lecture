const buttons = document.querySelectorAll(".concert-list li button");

buttons.forEach((button) => {
  button.addEventListener("click", selectConcert);
});

function selectConcert(event) {
  // das ausgewählte Konzert hervorheben
  const target = event.target;
  const parent = target.closest("li");
  console.log(parent);
  const title = parent.querySelector(".title");
  console.log("title", title);
  console.log("children", parent.children);
  parent.style.backgroundColor = "skyblue";
  [...parent.children].forEach((child) => (child.style.color = "white"));
  //Nächstes Element
  const next = parent.nextElementSibling;
  next.style.backgroundColor = "violet";
  //Vorheriges Element
  const prev = parent.previousElementSibling;
  prev.style.backgroundColor = "green";
}
