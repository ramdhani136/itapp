const mongoose = require("mongoose");

const groupMessages = mongoose.Schema({
  nama: { type: String, unique: true, index: true, required: true },
  status: { type: Boolean, default: true },
  userjoin: [
    mongoose.Schema({
      idUser: { type: String, unique: true },
      user: { type: String },
      divisi: { type: String },
    }),
  ],
});

module.exports = mongoose.model("Groupmessage", groupMessages);
