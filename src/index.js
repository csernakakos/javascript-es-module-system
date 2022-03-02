import {styleBody, addTitle} from "./dom";
import {users, getPremiumUsers} from "./data";

console.log("index.js");
const greet = (name = "Jan") => {
    console.log(`hello there, ${name}.`);
}

const getP = getPremiumUsers(users);


greet("luigi");
greet();
greet("malaka");

console.log("great!");
console.log(users, getP);