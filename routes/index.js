const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const user = require('./user/user')

// API Routes
router.use("/api", apiRoutes);
router.use('/user', user)

// If no API routes are hit, send the React app


module.exports = router;