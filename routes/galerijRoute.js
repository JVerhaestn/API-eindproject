const express = require("express");
const galerijController = require("../controller/galerijController");

const router = express.Router();

router
  .route("/")
  .get(galerijController.getAllVideos)
  .post(galerijController.addVideo);

module.exports = router;
