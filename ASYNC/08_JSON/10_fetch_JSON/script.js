/// Fetch von API

const apiCharactersURL = "https://rickandmortyapi.com/api/character";
let images;

// saync-Funktionen geben immer eine Promise zurück
const rickMortyCharacters = async () => {
  const response = await fetch(apiCharactersURL);
  const data = await response.json();
  renderCharacters(data);
};

function renderCharacters(data) {
  // Array                  Object               String
  images = data.results.map((character) => character.image);
  console.log(images);

  data.results.forEach((character) => {
    const img = document.createElement("img");
    img.src = character.image;

    document.body.appendChild(img);
  });
}

rickMortyCharacters().then(() => console.log(images));
