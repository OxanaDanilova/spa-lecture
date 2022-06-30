//Daten laden
const loadingWillStart = fetch(
  "https://raw.githubusercontent.com/fbw-d05/data/main/team"
)
  .then((response) => {
    const dataPromise = response.text();
    if (!response.ok) throw new Error("konnte nicht geladen werden");
    return dataPromise;
  })
  .then((data) => renderTeam(data))
  .catch(failureHanle);

// Promise

//renderTeam();
function renderTeam(team) {
  const teamMates = team.split(",");
  const list = document.createElement("ul");
  teamMates.forEach((firstName) => {
    const li = document.createElement("li");
    li.textContent = firstName;
    list.appendChild(li);
  });

  document.body.append(list);
}

function failureHanle(mes) {
  console.log(mes);
}
