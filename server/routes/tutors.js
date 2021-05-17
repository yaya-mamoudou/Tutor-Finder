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

route.post('/createClass', Auth, async (req, res) => {
  let check = await Users.findById(req.user.id);
  if (check.status === 'tutor') {
    let { className, tutorName, classCode, tutor_id } = req.body;
    try {
      let classroom = await Classroom.findOne({ className });
      if (classroom) {
        return res.status(400).json({ msg: 'This classroom Already Exists' });
      }
      classroom = new Classroom({
        className,
        tutorName: req.user.username,
        classCode,
        tutor_id: req.user.id,
      });

      await classroom.save();
      res.json({ classroom });
    } catch (err) {
      res.status(500).json({ msg: 'Server Error' });
      console.log(err.message);
    }
  } else {
    res.status(404).json({ msg: 'Only tutors can create classrooms' });
    console.log(err.message);
  }
});

//Edit classroom info:PRIVATE-TUTOR

route.put('/EditClassInfo/:id', Auth, async (req, res) => {
  let check = await Users.findById(req.user.id);
  try {
    if (check.status === 'tutor') {
      let updateClassInfo = await Classroom.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          runValidators: true,
          new: true,
        }
      );
      if (!updateClassInfo) {
        return res.status(400).json({ msg: 'no such classroom exists' });
      }
      res.json({ updateClassInfo });
    } else {
      res.status(404).json({ msg: 'Only tutors can create classrooms' });
      console.log(err.message);
    }
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(err.message);
  }
});

//Tutor View All classrooms he created : PRIVATE-TUTOR

route.get('/viewAllMyCreatedClasses', Auth, async (req, res) => {
  let check = await Users.findById(req.user.id);
  if (check.status === 'tutor') {
    try {
      let classroom = await Classroom.find({})
        .where('tutor_id')
        .equals(req.user.id);
      res.json({ classroom });
    } catch (err) {
      res.status(500).json({ msg: 'Server Error' });
      console.log(err.message);
    }
  } else {
    res.status(404).json({ msg: 'Only tutors can create classrooms' });
    console.log(err.message);
  }
});

module.exports = route;
