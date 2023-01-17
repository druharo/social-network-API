'use strict';

const reactionSchema = require('./reactionSchema.js');

module.exports = mongoose => {

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
    reactions: {
      type: Array, ref: reactionSchema
    },
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