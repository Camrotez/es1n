const crypto = require("crypto");
const min = 1;
const max = 100;
const id = crypto.randomInt(min, max);
console.log(id);