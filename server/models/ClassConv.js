const mongoose = require('mongoose');

const ClassConversationSchema = mongoose.Schema(
  {
    members: {
      type: [mongoose.Schema.Types.ObjectId],
      // default: null,
      ref: 'USER',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('CLASSCONVERSATION', ClassConversationSchema);
