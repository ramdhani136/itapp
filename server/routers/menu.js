const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menu");

router.route("/").get(menuController.index).post(menuController.store);
router
  .route("/:id")
  .get(menuController.show)
  .put(menuController.update)
  .delete(menuController.delete);

module.exports = router;
