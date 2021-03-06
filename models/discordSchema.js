const mongoose = require("mongoose");
const schema = mongoose.Schema;
const discordSchema = new schema({
  channelName: String,
  conversation: [
    {
      message: String,
      timestamp: String,
      user: {
        displayName: String,
        email: String,
        photo: String,
        uid: String,
      },
    },
  ],
});
module.exports = mongoose.model("conversations", discordSchema);
