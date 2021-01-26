const Profile = require("../models/profile");

module.exports = {
  index: async (req, res) => {
    try {
      const data = await Profile.find();
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
    payload = req.body;
    try {
      await Profile.findByIdAndUpdate(id, payload);
      res.json({
        status: true,
        message: "Berhasil update data",
      });
    } catch (err) {
      res.json(err);
    }
  },
};
