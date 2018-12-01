/*eslint no-console: 0 */
const express = require('express');
const router = express.Router();
const User = require('../db/models/user');
const passport = require('../passport');

// this route is just used to get the user basic info
router.get('/user', (req, res) => {
  console.log('===== user!!======');
  console.log(req.user);
  if (req.user) {
    return res.json({ user: req.user });
  } else {
    return res.json({ user: null });
  }
});

router.post(
  '/login',
  function(req, res, next) {
    console.log(req.body);
    console.log('================');
    next();
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('POST to /login');

    const cleanUser = JSON.parse(JSON.stringify(req.user)); // deepclone hack
    if (cleanUser.local) {
      console.log(`Deleting ${cleanUser.local.password}`);
      delete cleanUser.local.password;
    }
    res.json({ user: cleanUser });
  }
);

router.post('/logout', (req, res) => {
  if (req.user) {
    req.session.destroy();
    res.clearCookie('connect.sid'); // clean up!
    return res.json({ msg: 'logging you out' });
  } else {
    return res.json({ msg: 'no user to log out!' });
  }
});

// matches /auth/signup
router.post(
  '/signup',
  (req, res, next) => {
    const { username, password } = req.body;
    // ADD VALIDATION
    User.findOne({ 'local.username': username }, (err, userMatch) => {
      if (userMatch) {
        return res.json({
          error: `Sorry, already a user with the username: ${username}`
        });
      }
      const newUser = new User({
        'local.username': username,
        'local.password': password
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);

        next();
      });
    });
  },
  passport.authenticate('local'),
  (req, res) => {
    const cleanUser = JSON.parse(JSON.stringify(req.user)); // deepclone hack
    if (cleanUser.local) {
      console.log(`Deleting ${cleanUser.local.password}`);
      delete cleanUser.local.password;
    }
    res.json({ user: cleanUser });
  }
);

module.exports = router;
