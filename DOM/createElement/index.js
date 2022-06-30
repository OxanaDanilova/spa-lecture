const navString = prompt("Navigation");
const navItems = navString.split(",");
const nav = document.querySelector("header nav");

//Element erzeugen
const ulElement = document.createElement("ul");

navItems.forEach((item, index) => {
  const liElement = document.createElement("li");
  if (index == 0) {
    liElement.classList.add("active");
  }
  //Text ins Element einfügen
  liElement.textContent = item;
  liElement.classList.add("nav-element");
  ulElement.appendChild(liElement);
});

//Element ins DOM einfügen
nav.classList.add("dark", "small");
console.log(nav.classList);
nav.appendChild(ulElement);
