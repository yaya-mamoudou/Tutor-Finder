const mongoose = require('mongoose');

const ClassroomSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'usermodels',
  },

  className: {
    type: String,
    required: true,
  },
  classCode: {
    type: String,
    required: true,
  },
  tutorName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('ClassroomModel', ClassroomSchema);
