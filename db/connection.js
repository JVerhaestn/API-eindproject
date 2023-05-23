const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./db/galerij.sqlite3", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the database.");
});

// initial instelling voor Fk
db.get("PRAGMA foreign_keys = ON");

module.exports = db;
