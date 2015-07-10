var router = require('express').Router();
var db = require('piano-tuner').db;
router.get('/get/:id', function (req, res) {
    var id = req.param('id');
    db.Book.findOneById(id, function (err, book) {
        if (err) throw err;
        res.json(book);
    });
});

module.exports = router;
