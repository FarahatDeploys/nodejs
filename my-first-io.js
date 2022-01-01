//   » To print these instructions again, run: learnyounode print
//    » To execute your program in a test environment, run: learnyounode run my-first-io.js
//
//    » To verify your program, run: learnyounode verify my-first-io.js
//    » For help run: learnyounode help
//file name my-first-io.js
// we need to include the filesystem module

//   Write a program that uses a single synchronous filesystem operation to
//   read a file and print the number of newlines (\n) it contains to the
//   console (stdout), similar to running cat file | wc -l.

//   The full path to the file to read will be provided as the first
//   command-line argument (i.e., process.argv[2]). You do not need to make
//   your own test file.
var process = require("process");
var fs = require("fs");
const file = fs.readFileSync(process.argv[2]).toString();
const arrayofseperatedlines = file.split("\n");
//we need to pass a path in the command line
console.log(arrayofseperatedlines.length - 1);

// const filread = fs.readFileSync(process.argv[2]).toString().split("/n").length;
//remmmber that argv isn't a function
// console.log(filread);
