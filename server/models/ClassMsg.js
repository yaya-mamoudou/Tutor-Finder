const mongoose = require('mongoose');

const ClassMessageSchema = mongoose.Schema(
  {
    conversationId: {
      type: String,
    },
    sender: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'USER',
    },
    text: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('CLASSMESSAGE', ClassMessageSchema);
