const util = require("util");
const fs = require("fs");
const { v4: newID } = require("uuid");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  read() {
    return readFileAsync("db/db.json", "utf8");
  }

  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }
  getNotes() {
    return this.read().then((result) => {
      console.log(typeof result, result.length);
      return JSON.parse(result);
    });
  }

  postNotes(note) {
    //read
    return this.getNotes()
      .then((existingNotes) => {
        note.id = newID();
        //modify
        existingNotes.push(note);
        //write
        return existingNotes;
      })
      .then((newNotes) => {
        this.write(newNotes);
      })
      .then(() => {
        return note;
      });
  }
  deleteNote(noteId) {
    return this.getNotes().then((existingNotes) => {
      const filteredNotes = existingNotes.filter((note) => {
        return note.id !== noteId;
      });
      this.write(filteredNotes);
    });
  }
}

module.exports = new Store();
