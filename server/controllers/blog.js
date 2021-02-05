const Blog = require("../models/blog");

module.exports = {
  index: async (req, res, next) => {
    const data = await Blog.find();
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
    next();
  },
  store: async (req, res, next) => {
    const paylod = req.body;
    const upload = new Blog(paylod);
    await upload
      .save()
      .then((result) => {
        res.json({
          message: "Berhasil menambahkan data",
          data: result,
        });
      })
      .catch((err) => {
        res.json(err);
      });
    next();
  },
  show: async (req, res, next) => {
    const id = req.params.id;
    const data = await Blog.find({ _id: id });
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
    next();
  },
  update: async (req, res, next) => {
    const id = req.params.id;
    const payload = req.body;
    await Blog.findByIdAndUpdate(id, payload)
      .then((result) => {
        res.json({
          message: "berhasil mengedit data",
          data: result,
        });
      })
      .catch((err) => {
        res.json({
          message: "gagal update data",
          err: err,
        });
      });
    next();
  },
  delete: async (req, res, next) => {
    const id = req.params.id;
    await Blog.findByIdAndDelete(id)
      .then((result) => {
        res.json({
          message: "data berhasil di hapus",
        });
      })
      .catch((err) => {
        res.json({
          message: "Gagal menghapus data",
          err: err,
        });
      });
    next();
  },
};
