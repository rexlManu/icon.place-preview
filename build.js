var path = require("path");
var fs = require("fs");

fs.writeFileSync(
  path.resolve("icons.json"),
  JSON.stringify({
    data: fs
      .readFileSync(
        path.resolve("./node_modules/icon.place/iconplace.css"),
        "utf-8"
      )
      .match(/\.it.*(?=:)/g)
      .map((i) => i.substring(1))
      .filter((value, index, array) => array.indexOf(value) == index),
    lastUpdate: Date.now(),
  })
);

console.log("> Icon names saved to icons.json");
