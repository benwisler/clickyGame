const router = require("express").Router();

const highScoreRoutes = require("./leaderBoard");
// Book routes
// router.use("/users", userRoutes);
// router.use("/message", messageRoutes);

router.use("/leaderBoard", highScoreRoutes);

// return router;

module.exports = router;
