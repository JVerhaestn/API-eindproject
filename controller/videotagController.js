const db = require("../db/connection");

const getAllVideoTags = (req, res) => {
  db.all("Select * from videoTags", [], (err, rows) => {
    if (err) return res.json({ message: err.message });

    res.json({ bericht: "ok", data: rows });
  });
};

const addVideoTags = (req, res) => {
  const data = [req.body.omschrijving];
  db.run("insert into videoTags (video,id_tag) values (?,?)", data, (err) => {
    if (err) return res.json({ message: err.message });
    res.json({ bericht: "Toegevoegd" });
  });
};

module.exports = {
  getAllVideoTags,
  addVideoTags,
};
