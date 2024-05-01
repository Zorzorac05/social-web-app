const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },
        userName: [
            {
                type: Schema.Types.userName,
                ref: 'user',
                required: true,
            },
        ],
        createdAt: {
            type: Date,
            default: Date.now,
            //get: format,
        },
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
    }
);

module.exports = Reaction;