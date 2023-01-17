'use strict';

module.exports = {
  up: (models, mongoose) => {
    return models.Thought.bulkWrite([
      {
        insertOne: {
          document: {
            thoughtText: 'We stand on shoulders of giants',
            username: 'druharo',
            reactions: [
              {
                reactionBody: 'No way this is true',
                username: 'druharo'
              }
            ]
          }
        }
      }
    ]).then(res => {
      // Prints "1"
      console.log(res.insertedCount);
    });
  },

  down: (models, mongoose) => {
    return models.Thought.bulkWrite([
      {
        deleteOne: {
          filter: {
            username: 'druharo'
          }
        }
      }
    ]).then(res => {
      // Prints "1"
      console.log(res.deletedCount);
    });
  }
};