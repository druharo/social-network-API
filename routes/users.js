var express = require('express');
var router = express.Router();

var mongoose = require('../models/index');


/* GET users listing. */
router.get('/', async function (req, res, next) {

  const User = mongoose.model('User');

  User.find(function (err, users) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(users);
    }
  });
});

router.get('/:userId', async function (req, res, next) {
  const _id = req.params.userId;
  const User = mongoose.model('User');
  User.findById(_id, function (err, user) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(user);
    }
  });
});

router.post('/', async function (req, res, next) {
  const User = mongoose.model('User');
  res.send(User.bulkWrite([
    {
      insertOne: {
        document: req.body
      }
    }
  ]));
});

router.put('/:userId', async function (req, res, next) {
  const _id = req.params.userId;
  const User = mongoose.model('User');
  res.send(User.replaceOne({ _id: _id }));
});

router.delete('/:userId', async function (req, res, next) {
  const _id = req.params.userId;
  const User = mongoose.model('User');
  res.send(User.deleteOne({ _id: _id }));
});

module.exports = router;
