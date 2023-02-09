const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

//console.log(first,second)

//if file is availableit will override that file,
//if not it will create a new one
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`
);

//since file is already created, it will override the above text
writeFileSync(
  "./content/result-sync.txt",
  `Here is the overided result :\n ${first}, ${second}`
);

//we can also append the text to the previous text, by using flag: 'a'
writeFileSync(
  "./content/result-sync.txt",
  `\nHere is the appended result by using optional parameter flag 'a':\n ${first}, ${second}`,
  { flag: "a" }
);
