// import { towSum } from "./towSum";
var towSum = require("./towSum");
console.time("");
console.log(towSum([3, 2, 4], 6));
console.timeEnd("");
console.log(towSum([0, 8, 7, 3, 3, 4, 2], 11));
