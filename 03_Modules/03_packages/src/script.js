const jokes = require("jokes");
const rmeme = require("rmeme");

let joke = jokes();

const jokeTag = document.querySelector("#joke");
jokeTag.textContent = joke.text;

rmeme
  .meme()
  .then((url) => {
    const imgTag = document.querySelector("img");
    imgTag.src = url;
  })
  .catch((error) => console.log(error));

console.log("I see you");
