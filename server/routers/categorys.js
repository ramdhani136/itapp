const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categorys");

router.route("/").get(categoryController.index).post(categoryController.store);

router
  .route("/:id")
  .get(categoryController.show)
  .put(categoryController.update)
  .delete(categoryController.delete);

module.exports = router;
