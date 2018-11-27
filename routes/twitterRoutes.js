// const axios = require("axios");
require("dotenv").config()
const router = require("express").Router();
const trendsController = require("../controllers/trendsController");
const Twitter = require("twitter");

const client = new Twitter ({
    consumer_key: "UUBfDxn9L6S5u3awmH8cJEnke",
    consumer_secret: "eiWKbojXpOTHt5vhF6DjKvBGewZDOCIVhT1QWoYRqVm62CGLaV",
    access_token_key: "1065120313975832577-UDqJdJ4IzsYG9RSDIIf29zCku7p2As",
    access_token_secret: "uhCa0uxorGJM6buzAODOtHoDXSEgh1X0JBuXPpZjMeeSR"
})

var params = {
    id: '23424977',
    count: 10,
    result_type: 'recent',
    lang: 'en'
}


// Retrieves book information from Twitter Trends API
router.get('/home', (req, res) => {
    client
        .get('trends/place', params)
        .then((data) => {
            console.log(data);
            res.json(data)
        })
        .catch(err => res.json(err))
})

// client.get('trends/place', params, function(err, data, res) {
//     if(!err) {
//         for(let i = 0; i < data.length; i++) {
//             console.log(data[i]);
//         }
//         return res.render("/", data);
//     } else {
//         console.log(err)
//     }
// })


// Matches with "/api/home"
router.route("/home/")
  .get(trendsController.search)
  .post(trendsController.create);

// Matches with "/api/saved/:id"
router
  .route("/saved/:id")
  .get(trendsController.search)
  .put(trendsController.update)
  .delete(trendsController.delete)
  .post(trendsController.create);

module.exports = router;