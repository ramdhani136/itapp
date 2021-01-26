const Chats = require("../models/chats");

module.exports = {
  index: async (req, res) => {
    try {
      const data = await Chats.find();
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
    const upload = new Chats(payload);
    try {
      await upload.save();
      res.json({
        status: true,
        message: "berhasil mengirim pesan",
      });
    } catch (err) {
      res.send(err);
    }
  },
  show: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Chats.find({ _id: id });
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
    const id = req.params.id;
    try {
      const payload = req.body;
      await Chats.findByIdAndUpdate(id, payload);
      res.json({
        status: true,
        message: "Berhasil mengupdate data",
      });
    } catch (err) {
      res.send(err);
    }
  },
  delete: async (req, res) => {
    const id = req.params.id;
    try {
      await Chats.findByIdAndDelete(id);
      res.json({
        status: true,
        message: "Berhasil menghapus data",
      });
    } catch (err) {
      res.send(err);
    }
  },
  msg: async (req, res) => {
    const from = req.params.from;
    const to = req.params.to;
    try {
      const data = await Chats.find()
        .where("from._id")
        .in([from, to])
        .where("to._id")
        .in([to, from]);
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
};
