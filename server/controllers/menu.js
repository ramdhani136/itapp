const Menu = require("../models/menu");

module.exports = {
  index: async (req, res) => {
    try {
      const data = await Menu.find();
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
    const upload = new Menu(payload);
    try {
      await upload.save();
      res.json({
        status: "true",
        message: "Berhasil menambahkan data",
      });
    } catch (err) {
      res.send(err);
    }
  },
  show: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Menu.find({ _id: id });
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
      await Menu.findByIdAndUpdate(id, payload);
      res.json({
        status: true,
        message: "berhasil mengupdate data",
      });
    } catch (err) {
      res.send(err);
    }
  },
  delete: async (req, res) => {
    try {
        const payload = req.body;
        const id = req.params.id;
        await Menu.findByIdAndDelete(id);
        res.json({
          status: true,
          message: "berhasil menghapus data",
        });
      } catch (err) {
        res.send(err);
      }
  },
};
