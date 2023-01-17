var express = require('express');
var router = express.Router();

var mongoose = require('../models/index');


/* GET users listing. */
router.get('/', async function (req, res, next) {

    const Thought = mongoose.model('Thought');

    Thought.find(function (err, thoughts) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(thoughts);
        }
    });
});

router.get('/:thoughtId', async function (req, res, next) {
    const _id = req.params.thoughtId;
    const Thought = mongoose.model('Thought');
    Thought.findById(_id, function (err, thought) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(thought);
        }
    });
});

router.post('/', async function (req, res, next) {
    const Thought = mongoose.model('Thought');
    res.send(Thought.bulkWrite([
        {
            insertOne: {
                document: req.body
            }
        }
    ]));
});

router.put('/:thoughtId', async function (req, res, next) {
    const _id = req.params.thoughtId;
    const Thought = mongoose.model('Thought');
    res.send(Thought.replaceOne({ _id: _id }));
});

router.delete('/:thoughtId', async function (req, res, next) {
    const _id = req.params.thoughtId;
    const Thought = mongoose.model('Thought');
    res.send(Thought.deleteOne({ _id: _id }));
});

module.exports = router;