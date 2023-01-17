'use strict';
module.exports = mongoose => {
  const reactionSchema = new mongoose.Schema({
    reactionId: {
      type: mongoose.ObjectId,
      default: new mongoose.Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: new Date(),
      get: v => `${v.toLocaleString()}`,
    },
    username: {
      type: String,
      required: true,
    },
  });

  const newSchema = new mongoose.Schema({
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: new Date(),
      get: v => `${v.toLocaleString()}`,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: { type: [mongoose.ObjectId], ref: 'reactionSchema' },
  }, {
    virtuals: {
      reactionCount: {
        get() {
          return this.reactions.length;
        },
      }
    },
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });
  const Thought = mongoose.model('Thought', newSchema);
  return Thought;
};