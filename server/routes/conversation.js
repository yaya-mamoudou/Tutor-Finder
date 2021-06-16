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

//create classroom conversation :PRIVATE

// route.post('/athena/classroom/createConversation', Auth, async (req, res) => {
//   try {
//     let check = await Users.findById(req.user.id);
//     if (check.status === 'tutor') {
//       let classConversation = new Conversation({
//         members: [req.body.senderID, req.body],
//       });
//       await conversation.save();
//       res.status(200).json({ classConversation });
//     }
//   } catch (error) {
//     res.status(500).json({ msg: 'Server Error' });
//     console.log(err.message);
//   }
// });

module.exports = route;
