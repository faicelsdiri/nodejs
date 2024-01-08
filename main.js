const obj = require("./moduleLocal")

console.log(obj.Sous(+process.argv[2],+process.argv[3]));
console.log(obj.Div(+process.argv[2],+process.argv[3]));