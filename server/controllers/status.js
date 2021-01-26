const Status = require("../models/status");

module.exports = {
  index: async (req, res) => {
    try {
      const result = await Status.find();
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
    const Upload = new Status(payload);
    try {
      await Upload.save();
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
      const result = await Status.find({ _id: id });
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
      await Status.findByIdAndUpdate(id, payload);
      res.json({
        status: true,
        message: "Berhasil mengupdate data",
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
      await Status.findOneAndDelete(id);
      res.json({
        status: true,
        message: "Berhasil menghapus data",
      });
    } catch (err) {
      res.json({
        status: false,
        message: err,
      });
    }
  },
};
