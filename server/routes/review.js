const express = require('express');
const route = express.Router();
const Auth = require('../middleware/Auth');
const { check, validationResult } = require('express-validator');
const Review = require('../models/Review');

//create a review
route.post(
  '/addReview',
  [
    Auth,
    [
      check('rating', 'Please enter A Rating').not().isEmpty(),
      check('body', 'Please enter your review ').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let { body, rating, reviewers_id, selectedTutor_id } = req.body;
      let currentReview = await Review.create({
        body,
        rating,
        reviewers_id: req.user.id,
        selectedTutor_id,
      });
      await currentReview.save();
      res.json({ currentReview });
    } catch (err) {
      res.status(500).json({ msg: 'Server Error' });
      console.log(err.message);
    }
  }
);

//Tutor view all his reviews
route.get('/viewTutorsReview', Auth, async (req, res) => {
  try {
    let ViewReview = await Review.find({})
      .where('selectedTutor_id')
      .equals(req.user.id);
    res.json({ ViewReview });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(err.message);
  }
});

//Users view tutorrs review
route.get('/AllReviewsView/:id', Auth, async (req, res) => {
  try {
    let ViewReview = await Review.find({})
      .where('selectedTutor_id')
      .equals(req.params.id);
    res.json({ ViewReview });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
    console.log(err.message);
  }
});

module.exports = route;
