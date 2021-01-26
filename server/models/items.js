const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    kode: {
      type: String,
      index: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    merk: {
      type: String,
      default: null,
    },
    tipe: {
      type: String,
      default: null,
    },
    serialnumber: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      required: true,
    },
    keterangan: {
      type: String,
      default: null,
    },
    tgl_masuk: {
      type: Date,
      default: Date.now(),
    },
    tgl_off: {
      type: Date,
      default: null,
    },
    satuan: {
      type: String,
      rquired: true,
    },
    user: [
      mongoose.Schema({
        nama: {
          type: String,
          default: null,
        },
        divisi: {
          type: String,
          default: null,
        },
      }),
    ],
    garansi: [
      mongoose.Schema({
        nama: {
          type: String,
          default: null,
        },
        nomor: {
          type: String,
          default: null,
        },
        tgl_aktif: {
          type: Date,
          default: null,
        },
        catatan: {
          type: String,
          default: null,
        },
      }),
    ],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("Item", itemSchema);
