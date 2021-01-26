const mongoose = require("mongoose");

const statusSchema = mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  keterangan: {
    type: String,
    default:null
  },
  status: {
    type: Boolean,
    default: 1,
  },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

module.exports = mongoose.model("Status", statusSchema);
