const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {

    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
    }

    await User.insertMany([
        {
            username: 'Alex', 
            email: 'alex@email.com', 
            thoughts: [], 
            friends: []
        },
        {
            username: 'Zeno', 
            email: 'zeno@email.com', 
            thoughts: [], 
            friends: []
        },
        {
            username: 'Rylee', 
            email: 'rylee@email.com', 
            thoughts: [], 
            friends: []
        },
    ]);

    await Thought.insertMany([
        {
            thoughtText: 'head empty',
            userName: 'Alex',
            reactions: [
                {
                    reactionBody: 'wild and wacky',
                    userName: 'Alex'
                },
            ],
        },
        {
            thoughtText: 'big thoughts',
            userName: 'Alex',
            reactions: [
                {
                    reactionBody: 'same',
                    userName: 'Rylee'
                },
            ],
        },
        {
            thoughtText: 'im kinda a smart guy',
            userName: 'Zeno',
            reactions: [
                {
                    reactionBody: 'so true',
                    userName: 'Alex'
                },
            ],
        },

    ]);
});