const express = require('express');
const route = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Auth = require('../middleware/Auth');

//create account
route.post(
  '/',
  [
    check('username', 'Please enter your Name').not().isEmpty(),
    check('email', 'Please enter a valid email address').isEmail(),
    check(
      'password',
      'Your Password should be more than 7 characters'
    ).isLength({ min: 7 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      username,
      email,
      password,
      gender,
      speciality,
      bio,
      status,
      location,
      tel,
    } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User Already Exists' });
      }
      user = new User({
        username,
        email,
        password,
        gender,
        speciality,
        bio,
        status,
        location,
        tel,
      });
      const salt = await bcrypt.genSalt(11);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      const payload = {
        user: {
          id: user.id,
          username: user.username,
        },
      };
      await jwt.sign(payload, 'athena', { expiresIn: 36000 }, (err, token) => {
        if (err) {
          throw err;
        }
        res.json({ token });
      });
    } catch (err) {
      res.status(500).json({ msg: 'Server Error' });
      console.log(err.message);
    }
  }
);
// @desc      Get logged in user
// @access    Private
route.get('/loadUser', Auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//Get all users in the system : PRIVATE
route.get('/all/users', Auth, async (req, res) => {
  try {
    let getUser = await User.find({}).select('-password');
    res.status(200).json({ getUser });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(error.message);
  }
});
//update profile info:PRIVATE
route.put('/update/:id', Auth, async (req, res) => {
  try {
    let user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).select('-password');
    if (!user) {
      return res.status(400).json({ msg: 'No such user' });
    }
    return res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(error.message);
  }
});
module.exports = route;
