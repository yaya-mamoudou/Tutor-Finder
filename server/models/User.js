const mongoose = require('mongoose');

const AthenaSchema = mongoose.Schema({
  username: {
    type: String,
    required: 'true',
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  password: {
    type: String,
    required: 'true',
  },
  status: {
    type: String,
    enum: ['tutor', 'learner'],
    default: 'learner',
  },
  speciality: {
    type: String,
  },

  Date: {
    type: Date,
    default: Date.now(),
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  bio: {
    type: String,
    required: 'true',
  },
});

module.exports = mongoose.model('AthenasUserModel', AthenaSchema);
