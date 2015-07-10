var router = require('express').Router();

router.use('/account', require('./account'));
router.use('/order', require('./order.js'));
router.use('/search', require('/search.js'));

module.exports = router;
