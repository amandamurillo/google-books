const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//API routes
router.use("/api", apiRoutes);

//If no routes hit, send React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;