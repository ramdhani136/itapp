const express = require("express");
const port = 4000;
const app = express();
const url = "mongodb://localhost/itapp";
const mongoose = require("mongoose");
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.json());
app.use(express.urlencoded({ useNewUrlParser: true }));

/* routers */
const profileRouter = require("./routers/profile");
const userRouter = require("./routers/users");
const categoryRouter = require("./routers/categorys");
const statusRouter = require("./routers/status");
const requestCategoryRouter = require("./routers/requestCategory");
const itemRouter = require("./routers/items");
const rAssetRouter = require("./routers/requestAsset");
const rAksiRouter = require("./routers/requestAksi");
/* end */

/* Model */
const Msg = require("./models/message");
/* End */

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

const con = mongoose.connection;

con.on("open", () => {
  console.log("Connected ..");
});

/* routers */
app.use("/profile", profileRouter);
app.use("/users", userRouter);
app.use("/categorys", categoryRouter);
app.use("/status", statusRouter);
app.use("/requestcategory", requestCategoryRouter);
app.use("/items", itemRouter);
app.use("/reqasset", rAssetRouter);
app.use("/raksi", rAksiRouter);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
/* end */

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    const message = new Msg({ msg });
    message.save().then((res) => {
      io.emit("message", msg);
    });
  });
  Msg.find().then((res) => {
    socket.emit("allmessage", res);
  });
});

http.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
