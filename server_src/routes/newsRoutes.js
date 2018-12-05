const axios = require('axios');
require('dotenv').config();
const router = require('express').Router();

router.get('/', (req, res) => {
  axios({
    method: 'get',
    url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
      process.env.BUZZFEED_API_KEY
    }`
  })
    .then(data => {
      console.log(data.data); // This is working
      res.json(data);
    })
    .catch(err => res.json(err));
});

module.exports = router;
