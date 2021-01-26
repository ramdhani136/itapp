const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
  {
    msg: { type: String, required: true },
    tanggal: { type: Date, default: Date.now() },
    from: [
      mongoose.Schema({
        nama: { type: String, required: true },
        divisi: { type: String, required: true },
      }),
    ],
    to: [
      mongoose.Schema({
        nama: { type: String, default: null },
        divisi: { type: String, default: null },
      }),
    ],
    Group: { type: String, default: null },
    open: { type: Boolean, default: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("Chat", chatSchema);
