const express = require("express");
const rAksiController = require("../controllers/requestAksi");

const router = express.Router();

router.route("/").get(rAksiController.index).post(rAksiController.store);

router
  .route("/:id")
  .get(rAksiController.show)
  .put(rAksiController.update)
  .delete(rAksiController.delete);

module.exports = router;
