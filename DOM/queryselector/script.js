const color = prompt("Welche farbe?");

//get body element

//Element in HTML finden
const sectionArr = document.querySelectorAll("section");

// Element style ändern
sectionArr.forEach((el) => (el.style.backgroundColor = color));

console.log(sectionArr);
