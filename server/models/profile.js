const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  kontak: {
    type: Number,
    default:null
  },
  email: {
    type: String,
    default:null
  },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

module.exports = mongoose.model("Profile", profileSchema);
