const express = require("express");
const videoTagController = require("../controller/videotagController.js");

const router = express.Router();

router
  .route("/")
  .get(videoTagController.getAllVideoTags)
  .post(videoTagController.addVideoTags);

module.exports = router;
