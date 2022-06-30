// /* Ein Item anlegen*/
// localStorage.setItem("Sprachauswahl", "Deutsch");

// /*Ein Item abfragen*/
// const language = localStorage.getItem("Sprachauswahl");
// console.log(language);
// alert(language);

// /*Ein Item löschen*/
// localStorage.removeItem("Sprachauswahl");

const greeting = () => {
  const user = localStorage.getItem("Benutzer");
  if (user) {
    document.querySelector(
      "#greeting"
    ).innerHTML = `Hallo ${user}. Willkommen zurück!`;
  }
};

const saveName = () => {
  const name = document.querySelector("#name").value;
  localStorage.setItem("Benutzer", name);
  greeting();
};

greeting();

const removeName = () => {
  localStorage.removeItem("Benutzer");
  document.querySelector("#greeting").innerHTML = "Tschüss!";
};
