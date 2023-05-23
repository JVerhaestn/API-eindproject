const db = require("../db/connection");

const getAllVideos = (req, res) => {
  db.all("Select * from videos", [], (err, rows) => {
    if (err) return res.json({ message: err.message });

    res.json({ bericht: "ok", data: rows });
  });
};
const addVideo = (req, res) => {
  const data = [req.body.omschrijving, req.body.naam];
  db.run("insert into videos (omschrijving,naam) values (?,?)", data, (err) => {
    if (err) return res.json({ message: err.message });
    res.json({ bericht: "Toegevoegd" });
  });
};
module.exports = {
  getAllVideos,
  addVideo,
};
