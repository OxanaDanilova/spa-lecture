const momIWillCleanMyRoom = new Promise((resolve, reject) => {
  setTimeout(() => resolve("all clean!"), 2000);
});

const momIWillBringOutTheGarbage = new Promise((resolve, reject) => {
  setTimeout(() => resolve("all gone!"), 1000);
});

//momIWillCleanMyRoom.then(()=>console.log('Nice! Here is your ice cream!))

async function momWatching() {
  const resultClean = await momIWillCleanMyRoom;
  console.log(resultClean, "Nice! Here is your ice cream");

  const resultGarbage = await momIWillBringOutTheGarbage;
  console.log(resultGarbage, "Nice! You can play in your room");
}

momWatching();
