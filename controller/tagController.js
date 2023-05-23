const db = require("../db/connection");

const getAllTags = (req, res) => {
  db.all("Select * from tags", [], (err, rows) => {
    if (err) return res.json({ message: err.message });

    res.json({ bericht: "ok", data: rows });
  });
};
const addTag = (req, res) => {
  const data = [req.body.omschrijvingKort];
  db.run("insert into tags (omschrijvingKort) values (?)", data, (err) => {
    if (err) return res.json({ message: err.message });
    res.json({ bericht: "Toegevoegd" });
  });
};
module.exports = {
  getAllTags,
  addTag,
};
