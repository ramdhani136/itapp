const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  msg: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Messages", messageSchema);
