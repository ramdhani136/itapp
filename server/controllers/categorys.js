Category = require("../models/categorys");

module.exports = {
  index: async (req, res) => {
    try {
      const data = await Category.find();
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
          message: "Tidak ada data",
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
    const input = new Category(payload);

    try {
      await input.save();
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
    try {
      const id = req.params.id;
      const data = await Category.find({ _id: id });
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
          message: "Tidak ada data",
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
      await Category.findByIdAndUpdate(id, payload);
      res.json({
        status: true,
        message: "Data berhasil di update",
      });
    } catch (err) {
      res.json({
        status: false,
        message: err,
      });
    }
  },
  delete: async (req, res) => {
    const id = req.params.id;
    try {
      await Category.findByIdAndDelete(id);
      res.json({
        status: true,
        message: "Data berhasil di hapus",
      });
    } catch (err) {
      res.json({
        status: false,
        message: err,
      });
    }
  },
};
