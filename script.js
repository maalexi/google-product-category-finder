const fs = require("fs");
const readline = require("readline");
const object = [];

async function processLineByLine() {
  const fileStream = fs.createReadStream("data/data.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    const splitted_1 = line.split(" - ");
    const categoryID = splitted_1[0];
    const categories = splitted_1[1].split(" > ");
    const depth = categories.length;
    const objectToPush = { id: categoryID };
    if (depth > 0) objectToPush.level1 = categories[0];
    if (depth > 1) objectToPush.level2 = categories[1];
    if (depth > 2) objectToPush.level3 = categories[2];
    if (depth > 3) objectToPush.level4 = categories[3];
    if (depth > 4) objectToPush.level5 = categories[4];
    if (depth > 6) objectToPush.level6 = categories[5];
    if (depth > 7) objectToPush.level7 = categories[6];
    if (depth > 8) objectToPush.level8 = categories[7];
    object.push(objectToPush);
  }

  const json = JSON.stringify(object);
  fs.writeFileSync("data/data.json", json);
}

processLineByLine();
