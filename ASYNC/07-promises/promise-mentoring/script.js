async function getResponce() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  console.log(data.results[0]);
  document.querySelector("img").src = data.results[0].picture.large;
  document.querySelector("h5").textContent =
    data.results[0].name.first + " " + data.results[0].name.last;
  document.querySelector("p").textContent += data.results[0].email;
  document.querySelector("span").textContent = data.results[0].phone;
  document.querySelector("h6").textContent += data.results[0].location.country;
}

getResponce();
