const User = require("../models/users");

module.exports = {
  index: async (req, res) => {
    try {
      const result = await User.find();
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
      res.json({
        status: false,
        message: err,
      });
    }
  },
  store: async (req, res) => {
    const payload = req.body;
    const upload = new User(payload);

    try {
      await upload.save();
      res.json({
        status: true,
        message: "berhasil menambahkan user",
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
      const result = await User.find({ _id: id });
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
      await User.findByIdAndUpdate(id, payload);
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
    try {
      const id = req.params.id;
      await User.findOneAndDelete(id);
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
  bydivisi: async (req, res) => {
    try {
      const divisi = req.params.divisi;
      const result = await User.find({ divisi: divisi });
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
      res.json({
        status: false,
        message: err,
      });
    }
  },
};
