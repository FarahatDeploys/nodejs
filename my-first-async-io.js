var process = require("process");
var fs = require("fs");
var path = process.argv[2];

const file = fs.readFile(path, "utf-8", (err, data) => {
  if (err) throw err;
  //   console.log(data);
  const numberoflines = data.split("\n").length;
  console.log(numberoflines - 1);
});
