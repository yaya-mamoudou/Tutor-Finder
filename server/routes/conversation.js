const express = require('express');
const route = express.Router();
const Auth = require('../middleware/Auth');
const Conversation = require('../models/Conversation');
const { check, validationResult } = require('express-validator');

//new conversation
route.post('/', Auth, async (req, res) => {
  try {
    let conversation = new Conversation({
      members: [req.body.senderID, req.body.receiverID],
    });
    await conversation.save();
    res.status(200).json({ conversation });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(err.message);
  }
});

//get conversation of a user
route.get('/:convID', Auth, async (req, res) => {
  try {
    let conv = await Conversation.find({
      members: { $in: ['convID'] },
    });
    res.status(200).json({ conv });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(err.message);
  }
});

module.exports = route;
