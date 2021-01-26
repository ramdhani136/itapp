const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  nama: { type: String, required: true, unique: true, index: true },
  link: { type: String, required: true },
  aktif: { type: Boolean, default: true },
});

module.exports = mongoose.model("Menu", menuSchema);
