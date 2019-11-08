const router = require("express").Router();
const eventRoutes = require("./events");
const commentRoutes = require("./comment")

// Book routes
router.use("/events", eventRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
