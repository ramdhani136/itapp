const Raksi = require("../models/requestAksi");

module.exports = {
  index: async (req, res) => {
    try {
      const result = await Raksi.find();
      if (result.length > 0) {
        res.json({
          status: true,
          data: result,
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
      res.send(err);
    }
  },
  store: async (req, res) => {
    const payload = req.body;
    const upload = new Raksi(payload);
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
    try {
      const id = req.params.id;
      const result = await Raksi.find({ _id: id });
      if (result.length > 0) {
        res.json({
          status: true,
          data: result,
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
      res.send(err);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    try {
      await Raksi.findByIdAndUpdate(id, payload);
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
      await Raksi.findByIdAndDelete(id);
      res.json({
        status: true,
        message: "Data berhasil di hapus",
      });
    } catch (err) {
      res.json(err);
    }
  },
};
