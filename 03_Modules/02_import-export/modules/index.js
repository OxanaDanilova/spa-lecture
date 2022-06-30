import * as banking from "./banking.js";
import { greetUser } from "./user.js";
import getIban from "./account.js";

console.log(getIban());
console.log(banking.deposit(500, 258));
console.log(banking.bankDetails.sparkasse.biz);
console.log(banking.atmGreeting);
