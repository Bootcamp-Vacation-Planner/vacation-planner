const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Event
            .find(req.query)
            .sort({ startTime: +1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Event
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(req.body);

        db.Event
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        console.log("======data=====");
        console.log(req.params);

        console.log(req.body);

        db.Event
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateComments: function (req, res) {
        console.log("======data=====");
        console.log(req.params);

        console.log(req.body);

        db.Event
            .findOneAndUpdate({ _id: req.params.id }, {$push: { comments: req.body }})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Event
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    populate: function (req, res) {
        // Find all users
        db.Event.findById({ _id: req.params.id })
            // Specify that we want to populate the retrieved users with any associated notes
            .populate("comments")
            .then(function (dbModel) {
                // If able to successfully find and associate all Users and Notes, send them back to the client
                res.json(dbModel);
            })
            .catch(function (err) {
                // If an error occurs, send it back to the client
                res.json(err);
            });
    }
}