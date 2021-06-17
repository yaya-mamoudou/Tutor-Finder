const express = require('express');
const route = express.Router();
const Auth = require('../middleware/Auth');
const { check, validationResult } = require('express-validator');
const Message = require('../models/Message');
const ClassMessage = require('../models/ClassMsg');

//new message
route.post(
  '/',
  [Auth, [check('text', 'Please enter A message').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let { conversationId, sender, text } = req.body;
      let message = new Message({ conversationId, text });
      await message.save();
      res.status(200).json({ message });
    } catch (err) {
      res.status(500).json({ msg: 'Server Error' });
      console.log(err.message);
    }
  }
);

//get messages
route.get('/:conversationId', Auth, async (req, res) => {
  try {
    let message = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json({ message });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(err.message);
  }
});

//new class message
route.post(
  '/classMsg',
  [Auth, [check('text', 'Please enter A message').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let { conversationId, sender, text } = req.body;
      let message = new ClassMessage({
        sender: req.user.id,
        conversationId,
        text,
      });
      await message.save();
      res.status(200).json({ message });
    } catch (err) {
      res.status(500).json({ msg: 'Server Error' });
      console.log(err.message);
    }
  }
);

//get messages
route.get('/classMsg/:conversationId', Auth, async (req, res) => {
  try {
    let message = await ClassMessage.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json({ message });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(err.message);
  }
});
module.exports = route;
