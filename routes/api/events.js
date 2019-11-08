const router = require("express").Router();
const eventController = require("../../controllers/eventController");


router.route("/")
    .get(eventController.findAll)
    .post(eventController.create);


router
    .route("/:id")
    .get(eventController.findById)
    .put(eventController.update)
    .delete(eventController.remove);

router.route("/populate/:id")
    .get(eventController.populate);

module.exports = router;