const Notif = require("../models/notif");

module.exports = {
  index: async (req, res) => {
    try {
      const data = await Notif.find();
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
    const update = new Notif(payload);
    try {
      await update.save();
      res.json({
        status: true,
        message: "Berhasil menambahkan data",
      });
    } catch (err) {
      res.send(err);
    }
  },
  show: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Notif.find({ _id: id });
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
    try {
      const payload = req.body;
      const id = req.params.id;
      await Notif.findByIdAndUpdate(id, payload);
      res.json({
        status: true,
        message: "Berhasil mengupdate data",
      });
    } catch (err) {
      res.send(err);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      await Notif.findByIdAndDelete(id);
      res.json({
        status: true,
        message: "Berhasil menghapus data",
      });
    } catch (err) {
      res.send(err);
    }
  },
};
