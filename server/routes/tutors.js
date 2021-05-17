const express = require('express');
const Users = require('../models/User');
const Auth = require('../middleware/Auth');
const { check, validationResult } = require('express-validator');
const classroom = require('../models/Classroom');
const Classroom = require('../models/Classroom');
const route = express.Router();

//view All tutors : PRIVATE
route.get('/viewAllTutors', Auth, async (req, res) => {
  try {
    let user = await Users.find({})
      .where('status')
      .equals('tutor')
      .sort({ Date: -1 });
    res.json({ user });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(err.message);
  }
});

//create classroom : PRIVATE-TUTORS

route.post('/creatClass', async (req, res) => {
  const { className, tutorName, classCode } = req.body;
  try {
    let classroom = await Classroom.findOne({ className });
    if (classroom) {
      return res.status(400).json({ msg: 'This classroom Already Exists' });
    }
    await classroom.save();
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(err.message);
  }
});

module.exports = route;
