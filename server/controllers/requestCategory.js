const Requestcategory = require("../models/requestCategory");

module.exports = {
  index: async (req, res) => {
    try {
      const data = await Requestcategory.find();
      if (data.length > 0) {
        res.json({
          status: true,
          data: data,
          method: req.method,
          url: req.url,
        });
      } else {
        res.json({
          status: false,
          message: "Data tidak ada",
        });
      }
    } catch (err) {
      res.json({
        status: false,
        message: err,
      });
    }
  },
  store: async (req, res) => {
    const payload = req.body;
    const upload = new Requestcategory(payload);
    try {
      await upload.save();
      res.json({
        status: true,
        message: "Berhasil menambahkan data",
      });
    } catch (err) {
      res.json({
        status: false,
        message: err,
      });
    }
  },
  show: async (req, res) => {
    const id = req.params.id;
    try {
      const data = await Requestcategory.find({ _id: id });
      if (data.length > 0) {
        res.json({
          status: true,
          data: data,
          method: req.method,
          url: req.url,
        });
      } else {
        res.json({
          status: false,
          message: "Data tidak ada",
        });
      }
    } catch (err) {
      res.json({
        status: false,
        message: "Data tidak ada",
      });
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    try {
      await Requestcategory.findByIdAndUpdate(id, payload);
      res.json({
        status: true,
        message: "Data berhasil di update",
      });
    } catch (err) {
      res.json({
        status: false,
        message: "Gagal mengupdate data",
      });
    }
  },
  delete: async (req, res) => {
    const id = req.params.id;
    try {
      await Requestcategory.findOneAndDelete(id);
      res.json({
        status: true,
        message: "Berhasil menghapus data",
      });
    } catch (err) {
      res.json({
        status: false,
        message: "Gagal menghapus data",
      });
    }
  },
};
