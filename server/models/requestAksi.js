const mongoose = require("mongoose");

const rAksiSchema = mongoose.Schema(
  {
    nomor: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    tanggal: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    rcategory: {
      type: String,
      required: true,
    },
    keterangan: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    tindakan: {
      type: String,
      default: null,
    },
    alastolak: {
      type: String,
      default: null,
    },
    img: {
      type: String,
      default: null,
    },
    item: [
      mongoose.Schema({
        kode: { type: String, unique: true, required: true },
        nama: { type: String, required: true },
        category: { type: String, required: true },
        serialnumber: { type: String, default: null },
        type: { type: String, default: null },
        merk: { type: String, default: null },
        image: { type: String, default: null },
        status: { type: String, default: null },
        keterangan: { type: String, default: null },
      }),
    ],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("Raksi", rAksiSchema);
