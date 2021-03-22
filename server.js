const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/connectDB");
const cors = require("cors");
require("dotenv").config();
const authRoute = require("./routes/authRoute");
const channelRoute = require("./routes/channelRoute");
const Pusher = require("pusher");
const pusher = new Pusher({
  appId: "1128466",
  key: "a8384383cfa7179c26b0",
  secret: "5dc6e850f783bc799231",
  cluster: "eu",
  useTLS: true,
});
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
//connect DB

connectDB();
mongoose.connection.once("open", () => {
  console.log("DB connected!!");
  const changeStrea = mongoose.connection.collection("conversations").watch();
  changeStrea.on("change", (change) => {
    if (change.operationType === "insert") {
      pusher.trigger("channels", "newChannel", {
        change: change,
      });
    } else if (change.operationType === "update") {
      pusher.trigger("conversation", "newMessage", {
        change: change,
      });
    } else {
      console.log("Error triggering pusher!");
    }
  });
});
//routes
app.use("/", authRoute);
app.use("/new", channelRoute);
app.use("/get", channelRoute);
//create server
app.listen(PORT, (err) => {
  err
    ? console.log("erreur", err)
    : console.log("Server is running on port :", PORT);
});
