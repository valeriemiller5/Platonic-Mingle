var db = require('../db/models');
const router = require('express').Router();

router.post('/', function(req, res) {
  console.log('Saving Fav ---');
  db.Trend.create(req.body).then(function(newFav) {
    res.json(newFav);
  });
});

router.get('/', function(req, res) {
  console.log('searching Fav---');
  db.Trend.find({ user: req.user.local.username }).then(function(favs) {
    res.json(favs);
  });
});

module.exports = router;
