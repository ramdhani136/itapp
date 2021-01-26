const express = require("express");
const router = express.Router();
const gMessageController = require("../controllers/groupMessages");

router.route("/").get(gMessageController.index).post(gMessageController.store);
router
  .route("/:id")
  .get(gMessageController.show)
  .put(gMessageController.update)
  .delete(gMessageController.delete);

module.exports = router;
