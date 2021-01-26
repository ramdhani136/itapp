const express = require("express");
const router = express.Router();
const rAssetController = require("../controllers/requestAsset");

router.route("/").get(rAssetController.index).post(rAssetController.store);

router
  .route("/:id")
  .get(rAssetController.show)
  .put(rAssetController.update)
  .delete(rAssetController.delete);

module.exports = router;
