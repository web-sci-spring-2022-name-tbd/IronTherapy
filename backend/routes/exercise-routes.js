const Exercise = require("../models/exercise");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log(req.user);
    console.log(req.user.uid);
    // Need to put in firebase auth stuff
    const data = await Exercise.find({
      uid: req.user.uid
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:name", async (req, res) => {
  try {
    // Need to put in firebase auth stuff
    const data = await Exercise.findOne({
      name: req.params.name,
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
