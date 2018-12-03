const axios = require("axios");
require('dotenv').config();
const router = require('express').Router();
const trendsController = require('../controllers/trendsController');
const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var params = {
  id: '23424977',
  count: 10,
  result_type: 'recent',
  lang: 'en'
};

// // Retrieves book information from Twitter Trends API
// // /api/twitter/
router.get('/', (req, res) => {
  client
    .get('trends/place', params)
    .then(data => {
      // console.log('api.js line 27: ', data); // This is working
      res.json(data);
    })
    .catch(err => res.json(err));
});

// // client.get('trends/place', params, function(err, data, res) {
// //     if(!err) {
// //         for(let i = 0; i < data.length; i++) {
// //             console.log(data[i]);
// //         }
// //         return res.render("/", data);
// //     } else {
// //         console.log(err)
// //     }
// // })

// // Matches with "/api/home"
// router
//   .route('/home/')
//   .get(trendsController.search)
//   .post(trendsController.create);

// // Matches with "/api/saved/:id"
// router
//   .route('/saved/:id')
//   .get(trendsController.search)
//   .put(trendsController.update)
//   .delete(trendsController.delete)
//   .post(trendsController.create);

module.exports = router;
