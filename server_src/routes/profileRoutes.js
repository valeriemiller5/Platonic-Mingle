var db = require('../db/models');
const router = require('express').Router();

router.post('/', function(req, res) {
  console.log('profile route ---');
  console.log(req.body);
  db.Profile.create(req.body.profile).then(function(newProfile) {
    res.json(newProfile);
  });
});

router.get('/', function(req, res) {
  console.log('getting profile ---');
  console.log(req.user.local.username);
  db.Profile.find({ userName: req.user.local.username }).then(function(
    profile
  ) {
    res.json(profile);
  });
});

module.exports = router;
