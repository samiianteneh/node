var fs = require("fs");
var data = fs.readFileSync("input.txt");

console.log(data.toString());
console.log("wait Ended");
console.log("#####################################");
console.log("#####################################");



fs.readFile("input.txt", function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});
console.log("dont wait Ended");