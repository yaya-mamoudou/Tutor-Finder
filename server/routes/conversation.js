const express = require('express');
const route = express.Router();
const Auth = require('../middleware/Auth');
const Conversation = require('../models/Conversation');
const ClassConversation = require('../models/ClassConv');

const { check, validationResult } = require('express-validator');
const Users = require('../models/User');

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
route.get('/:userID', Auth, async (req, res) => {
  try {
    let conv = await Conversation.find({
      members: { $in: [req.params.userID] },
    }).populate('members');
    res.status(200).json({ conv });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(err.message);
  }
});

//create classroom convclassConversationersation :PRIVATE

route.post('/classroom/createConversation', Auth, async (req, res) => {
  try {
    let check = await Users.findById(req.user.id);
    if (check.status === 'tutor') {
      let aclassConversation = new ClassConversation({
        members: [
          req.body.tutID,
          req.body.send1,
          req.body.send2,
          req.body.send3,
          req.body.send4,
          req.body.send5,
          req.body.send6,
          req.body.send7,
          req.body.send8,
          req.body.send9,
          req.body.send10,
          req.body.send11,
          req.body.send12,
        ],
      });
      await aclassConversation.save();
      res.status(200).json({ aclassConversation });
    }
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(err.message);
  }
});

//get created classroom conversation : PRIVATE
route.get('/classConversation/:userID', Auth, async (req, res) => {
  try {
    let conversation = await ClassConversation.find({
      members: { $in: [req.params.userID] },
    }).populate('members');
    res.status(200).json({ conversation });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(err.message);
  }
});

module.exports = route;
