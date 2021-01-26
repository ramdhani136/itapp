const Item = require("../models/items");

module.exports = {
  index: async (req, res) => {
    try {
      const data = await Item.find();
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
        message: "Tidak ada data",
      });
    }
  },
  store: async (req, res) => {
    const payload = req.body;
    const upload = new Item(payload);
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
        notif: err,
      });
    }
  },
  show: async (req, res) => {
    const id = req.params.id;
    try {
      const data = await Item.find({ _id: id });
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
        message: "Tidak ada data",
      });
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    try {
      await Item.findByIdAndUpdate(id, payload);
      res.json({
        status: true,
        message: "Berhasil mengupdate data",
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
      await Item.findByIdAndDelete(id);
      res.json({
        status: true,
        message: "Berhasil menghapus item",
      });
    } catch (err) {
      res.json("Gagal menghapus item");
    }
  },
};
