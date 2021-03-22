//imports
const express = require("express");
const router = express.Router();
const {
  createChannelController,
  getChannelsController,
  addMessageController,
  getConversationController,
} = require("../controllers/channelRoute.Controller");
//test route
router.post("/channel", createChannelController);

// channel list
router.get("/channelList", getChannelsController);

// add messages

router.post("/message", addMessageController);
// get conversation
router.get("/conversation", getConversationController);
module.exports = router;
