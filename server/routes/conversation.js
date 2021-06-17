const express = require('express');
const route = express.Router();
const Auth = require('../middleware/Auth');
const Conversation = require('../models/Conversation');
const ClassConversation = require('../models/ClassConv');
const Classroom = require('../models/Classroom');
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
      let { members } = req.body;
      let aclassConversation = new ClassConversation({ members });
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
    let conversation = await Classroom.find({
      participants: { $in: [req.params.userID] },
    });
    // .populate('participants');
    res.status(200).json({ conversation });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(err.message);
  }
});

module.exports = route;
