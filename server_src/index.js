const router = require('express').Router();

// define routes here
router.use('/auth', require('./auth'));
router.use('/api', require('./api'));
router.use('/api/twitter', require('./routes/twitterRoutes'));
router.use('/api/news', require('./routes/newsRoutes'));
router.use('/api/create_profile', require('./routes/profileRoutes'));
router.use('/api/favs', require('./routes/favRoutes'));

module.exports = router;
