var db = require('../db/models');
const router = require('express').Router();

router.post('/', function(req, res) {
  console.log('profile route ---');
  console.log(req.body);
  db.Profile.create(req.body.profile).then(function(newProfile) {
    res.json(newProfile);
  });
});

module.exports = router;
