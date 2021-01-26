const mongoose = require("mongoose");

const reqAssetSchema = mongoose.Schema({
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
  keterangan: {
    type: String,
    default:null
  },
  user: [
    mongoose.Schema({
      nama: { type: String, required: true },
      divisi: { type: String, required: true },
    }),
  ],
  items: [
    mongoose.Schema({
      nama: { type: String, required: true },
      category: { type: String, required: true },
      qty: { type: Number, required: true },
      satuan: { type: String, required: true },
      catatan: { type: String , default:null},
    }),
  ],
  status: {
    type: String,
    default: "Sent",
  },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

module.exports = mongoose.model("Requestasset", reqAssetSchema);
