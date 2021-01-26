const express = require("express");
const router = express.Router();
const notifController = require("../controllers/notif");

router.route("/").get(notifController.index).post(notifController.store);
router
  .route("/:id")
  .get(notifController.show)
  .put(notifController.update)
  .delete(notifController.delete);

module.exports = router;
