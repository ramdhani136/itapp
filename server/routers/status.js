const express = require("express");
const router = express.Router();
const statusController = require("../controllers/status");

router.route("/").get(statusController.index).post(statusController.store);
router
  .route("/:id")
  .get(statusController.show)
  .put(statusController.update)
  .delete(statusController.delete);

module.exports = router;
