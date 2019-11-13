const router = require("express").Router();
const eventRoutes = require("./events");
const commentRoutes = require("./comment")

// Events and Comments routes
router.use("/events", eventRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
