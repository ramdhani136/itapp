const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default:null
    },
    status: {
      type: Boolean,
      default: 1,
    },
    admin: {
      type: Boolean,
      default: 0,
    },
    divisi: {
      type: String,
      required: true,
      index: true,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("User", userSchema);
