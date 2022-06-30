function createTimeout(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time * 1000);
  });
}
async function timerStart() {
  await createTimeout(5);
  console.log("Zeit abgelaufen!");
}

timerStart();
