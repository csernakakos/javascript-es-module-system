// -------- import EVERYTHING:
import * as Everything from "./eventListeners.js";
console.log(Everything.greeting, Everything.num); 
console.log(Everything);

// -------- import NodeJS style:
import {greeting, num} from "./eventListeners.js";
console.log(greeting, num);


// -------- import while renaming
import {greeting as HEY, myFunc as NewFunc} from "./eventListeners.js";

console.log(HEY);
console.log(NewFunc(HEY))