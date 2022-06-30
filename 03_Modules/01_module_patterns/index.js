/* const withdraw = ((balance, amount) => {
  if (balance >= amount) {
    balance -= amount;
  }
  console.log(balance);
})(100, 20); */

const bankAccount = ((balance) => {
  const checkBalance = (currentBalance, amountToWithdraw) => {
    if (currentBalance >= amountToWithdraw) {
      return true;
    } else false;
  };

  const withdraw = (amount) => {
    const currentBalance = checkBalance(balance, amount);
    if (currentBalance) {
      balance -= amount;
      return balance;
    } else {
      console.log("Bist Arm digga.");
    }
  };
  return {
    withdraw,
    checkBalance,
  };
})(300);
