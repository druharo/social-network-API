'use strict';

const { isEmail } = require('validator');

module.exports = mongoose => {
  const newSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: [isEmail, 'invalid Email']
    },
    thoughts: { type: [mongoose.ObjectId], ref: 'Thought' },
    friends: { type: [mongoose.ObjectId], ref: 'User' }
  }, {
    virtuals: {
      friendCount: {
        get() {
          return this.friends.length;
        },
      }
    },
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });
  const User = mongoose.model('User', newSchema);
  return User;
};