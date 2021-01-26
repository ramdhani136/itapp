const mongoose = require("mongoose");

const notifSchema = mongoose.Schema({
  keterangan: { type: String, required: true },
  notif: { type: String, required: true },
  link: { type: String, required: true },
  user: [
    mongoose.Schema({
      nama: { type: String, required: true },
      divisi: { type: String, required: true },
    }),
  ],
  tanggal: { type: Date, default: Date.now() },
  open: { type: Boolean, default: false },
  sendto: [
    mongoose.Schema({
      group: { type: String, default: null },
      idUser: { type: String, default: null },
      user: { type: String, default: null },
    }),
  ],
  dokumen: { type: String, required: true },
});

module.exports = mongoose.model("Notif", notifSchema);
