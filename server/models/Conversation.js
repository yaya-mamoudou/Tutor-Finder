const mongoose = require('mongoose');

const ConversationSchema = mongoose.Schema(
  {
    members: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'USER',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('CONVERSATION', ConversationSchema);
