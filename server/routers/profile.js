const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile");

router.route("/").get(profileController.index);

router.put("/:id", profileController.update);

module.exports = router;
