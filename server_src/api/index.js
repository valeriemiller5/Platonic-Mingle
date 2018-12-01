const router = require('express').Router();
const authenticated = require('./authenticated');

router.route('/public').get((req, res) => res.json('Hello API'));

router
  .route('/private')
  .get(authenticated, (req, res) => res.json('Hello Private API'));

module.exports = router;
