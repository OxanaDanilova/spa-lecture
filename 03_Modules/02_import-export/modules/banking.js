const bankDetails = {
  sparkasse: {
    biz: 51150018,
    location: "Berlin",
  },
};
const atmGreeting = "Willkommen! Wie viel Geld möchtest du abheben?";

const withdraw = (balance, amount) => {
  if (balance >= amount) {
    balance -= amount;
    return balance;
  } else {
    console.log("Bist Arm digga.");
  }
};

const deposit = (balance, amount) => {
  return balance + amount;
};

export { withdraw, deposit, bankDetails, atmGreeting };
