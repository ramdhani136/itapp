const express = require("express");
const router = express.Router();
const itemController = require("../controllers/items");

router.route("/").get(itemController.index).post(itemController.store);
router
  .route("/:id")
  .get(itemController.show)
  .put(itemController.update)
  .delete(itemController.delete);

module.exports = router;
