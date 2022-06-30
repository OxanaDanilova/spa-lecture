const delivery = new Promise(handleDelivery);

const atHome = false;

function handleDelivery(success, failure) {
  setTimeout(() => {
    atHome ? success("Olga") : failure("Bissiger Hund");
  }, 5000);
}

delivery.then(packgeDelivered).catch(packgeNotDelivered);

function packgeDelivered(recepient) {
  console.log("Paket ist da", recepient);
}

function packgeNotDelivered(reason) {
  console.log("Paket ist nicht da", reason);
}
