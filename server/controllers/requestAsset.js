const Requestasset = require("../models/requestAsset");

module.exports = {
  index: async (req, res) => {
    try {
      const data = await Requestasset.find();
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
          message: "tidak ada data",
        });
      }
    } catch (err) {
      res.json(err);
    }
  },
  store: async (req, res) => {
    const payload = req.body;
    const upload = new Requestasset(payload);
    try {
      await upload.save();
      res.json({
        status: true,
        message: "Berhasil menambahkan data",
      });
    } catch (err) {
      res.json({
        status: false,
        message: "Gagal menambahkan data",
        notif: error,
      });
    }
  },
  show: async (req, res) => {
    const id = req.params.id;
    try {
      const data = await Requestasset.find({ _id: id });
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
          message: "tidak ada data",
        });
      }
    } catch (err) {
      res.json(err);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    try {
      await Requestasset.findByIdAndUpdate(id, payload);
      res.json({
        status: true,
        message: "Berhasil update",
      });
    } catch (err) {
      res.json(err);
    }
  },
  delete: async (req, res) => {
    const id = req.params.id;
    try {
      await Requestasset.findByIdAndDelete(id);
      res.json({
        status: true,
        message: "Data berhasil di hapus",
      });
    } catch (err) {
      res.json(err);
    }
  },
};
