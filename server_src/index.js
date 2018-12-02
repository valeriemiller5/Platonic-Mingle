const router = require('express').Router();

// define routes here
router.use('/auth', require('./auth'));
router.use('/api', require('./api'));
router.use('/api/twitter', require('./routes/twitterRoutes'));

module.exports = router;
