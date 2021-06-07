const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
  reviewers_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'USER',
  },

  rating: {
    type: String,
    // required: true,
  },

  body: {
    type: String,
    required: true,
  },
  selectedTutor_id: {
    type: [mongoose.Schema.Types.ObjectId],
    default: null,
    ref: 'USER',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('REVIEW', ReviewSchema);
