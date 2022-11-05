const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Books = require("../routes/books");

//getting all books
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'get books'
    });
});

router.get('/:ISBN', (req, res, next) => {
    const ISBN = req.params.ISBN;
    User.findById(id)
    .exec()
    .then(result => {
        console.log(result);
        if(result) {
            res.status(200).json(result);
        }
        else {
            res.status(404).json({message:'ISBN is not valid'});
        }
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});
module.exports = router;
