// Require the models directory to access the Trend schema
const db = require("./../db/models");

// // Set up CRUD methods to connect with the database
module.exports = {
    search: function(req, res) {
      db.Trend
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    },
    findById: function(req, res) {
      console.log(req.params.id)
      db.Trend
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    },
    create: function(req, res) {
      db.Trend
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    },
    update: function(req, res) {
      db.Trend
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    },
    delete: function(req, res) {
      db.Trend
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    }
  };
