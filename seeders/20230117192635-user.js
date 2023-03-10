'use strict';

module.exports = {
  up: (models, mongoose) => {
    return models.User.bulkWrite([
      {
        insertOne: {
          document: {
            username: "druharo",
            email: "ruharo@gmail.com",
          }
        }
      }
    ]).then(res => {
      // Prints "1"
      console.log(res.insertedCount);
    });
  },

  down: (models, mongoose) => {
    return models.User.bulkWrite([
      {
        deleteMany: {
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