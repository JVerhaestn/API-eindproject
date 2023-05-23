const express = require("express");
const galerijRoute = require("./routes/galerijRoute");
const tagRoute = require("./routes/tagRoute");
const videoTagRoute = require("./routes/videotagRoute");
const app = express();

app.use(express.json());
// verwijder de cross foutmelding
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/api/galerij", galerijRoute);
app.use("/api/tags", tagRoute);
app.use("/api/videoTags", videoTagRoute);
app.listen(3000, () => console.log("server active"));
