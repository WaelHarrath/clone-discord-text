//imports
const express = require("express");
const router = express.Router();

//test route
router.get("/", (req, res) => {
  res.status(200).json("Hello wael");
});
module.exports = router;
