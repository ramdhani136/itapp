const GM = require("../models/groupMessages");

module.exports = {
  index: async (req, res) => {
    try {
      const data = await GM.find();
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
      res.send(err);
    }
  },
  store: async (req, res) => {
    const payload = req.body;
    const update = new GM(payload);
    try {
      await update.save();
      res.json({
        status: true,
        message: "Data berhasil di tambahkan",
      });
    } catch (err) {
      res.send(err);
    }
  },
  show: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await GM.find({ _id: id });
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
      res.send(err);
    }
  },
  update: async (req, res) => {
    const payload = req.body;
    const id = req.params.id;
    try {
      await GM.findByIdAndUpdate(id, payload);
      res.json({
        status: true,
        message: "Data berhasil di update",
      });
    } catch (err) {
      res.send(err);
    }
  },
  delete: async (req, res) => {
    const id = req.params.id;
    try {
      await GM.findByIdAndDelete(id);
      res.json({
        status: true,
        message: "Data berhasil di hapus",
      });
    } catch (err) {
      res.send(err);
    }
  },
};
