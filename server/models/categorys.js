const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    keterangan: {
      type: String,
      default: null,
    },
    status: {
      type: Boolean,
      default: 1,
    },
    group: {
      type: Boolean,
      default: 0,
    },
    parent: {
      type: String,
      default: null,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("Category", categorySchema);
