const express = require("express");
const tagController = require("../controller/tagController.js");

const router = express.Router();

router.route("/").get(tagController.getAllTags).post(tagController.addTag);

module.exports = router;
