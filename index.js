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
console.log(NewFunc(HEY));

// -------- Default exports for when you only want to export 1 thing
import myDefault from "./default.js";
console.log(myDefault);

// -------- lodash-es
import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

const state = {
    cart: [
        {product: "a", quantity: 5},
        {product: "b", quantity: 5},
        {product: "c", quantity: 5},
    ],
    user: {loggedIn: true},
};

const stateClone = Object.assign({}, state);
console.log(stateClone);
const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);


