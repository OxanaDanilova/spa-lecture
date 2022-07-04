"use strict";

const userList = ["Mercedes", "Dennis"];

const user = {
  name: "Maxim",
  getUser: function () {
    alert(`Hello, ${this.name}`);
  },
};

//debugger;

getUserData();

function getUserData(name, age) {
  console.log(this);
}
