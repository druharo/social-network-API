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
    
  
      return models.Test.bulkWrite([
        {
          deleteOne: {
            filter: {
              name: 'first test'
            }
          }
        }
      ]).then(res => {
      // Prints "1"
      console.log(res.deletedCount);
      });
  }
};