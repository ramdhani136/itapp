const express = require("express");
const { route } = require("./profile");
const router = express.Router();
const requestCategoryController = require("../controllers/requestCategory");

router
  .route("/")
  .get(requestCategoryController.index)
  .post(requestCategoryController.store);
router
  .route("/:id")
  .get(requestCategoryController.show)
  .put(requestCategoryController.update)
  .delete(requestCategoryController.delete);

module.exports = router;
