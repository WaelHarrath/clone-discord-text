const Channel = require("../models/discordSchema");

//create channel
exports.createChannelController = async (req, res) => {
  const data = req.body;
  try {
    const newChannel = new Channel(data);
    let result = await newChannel.save();
    res.status(200).send({ response: result });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

exports.getChannelsController = async (req, res) => {
  try {
    let result = await Channel.find();

    let Channels = [];
    result.map((channelData) => {
      const channelInfo = {
        id: channelData._id,
        name: channelData.channelName,
      };
      Channels.push(channelInfo);
    });
    res.status(200).send({ response: Channels });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

exports.addMessageController = async (req, res) => {
  const channelId = req.query.id;
  const newMessage = req.body;
  try {
    let result = await Channel.findOneAndUpdate(
      { _id: channelId },
      { $push: { conversation: newMessage } }
    );

    res.status(200).send({ response: result });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};
exports.getConversationController = async (req, res) => {
  const id = req.query.id;
  try {
    let result = await Channel.find({ _id: id });

    res.status(200).send({ response: result });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};
