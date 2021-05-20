const mongoose = require('mongoose');

const ClassroomSchema = mongoose.Schema({
  tutor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'USER',
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
  participants: {
    type: [mongoose.Schema.Types.ObjectId],
    default: null,
    ref: 'USER',
  },
});

module.exports = mongoose.model('CLASSROOM', ClassroomSchema);
