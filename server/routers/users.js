const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");
const { route } = require("./profile");

router.route("/").get(userController.index).post(userController.store);

router
  .route("/:id")
  .get(userController.show)
  .put(userController.update)
  .delete(userController.delete);

router.get("/divisi/:divisi", userController.bydivisi);

module.exports = router;
