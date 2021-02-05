const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog");

router.route("/").get(blogController.index).post(blogController.store);

router
  .route("/:id")
  .get(blogController.show)
  .put(blogController.update)
  .delete(blogController.delete);

module.exports = router;
