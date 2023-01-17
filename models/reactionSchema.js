'use strict';

module.exports = mongoose => {
    const reactionSchema = new mongoose.Schema({
        reactionId: {
            type: mongoose.ObjectId,
            default: new mongoose.Types.ObjectId(),
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

    return reactionSchema;
};