const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chats");

router.route("/").get(chatController.index).post(chatController.store);

router
  .route("/:id")
  .get(chatController.show)
  .put(chatController.update)
  .delete(chatController.delete);

router.get("/view/:from/:to", chatController.msg);

module.exports = router;
