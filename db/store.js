const util = require("util");
const fs = require("fs");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  read() {
    return readFileAsync("db/db.json", "utf8");
  }

  write(note) {
    return writeFileAsync("db/db.json", note);
  }
  getNotes() {
    return this.read().then((result) => {
      console.log(typeof result, result.length);
      return JSON.parse(result);
    });
  }
}

module.exports = new Store();
