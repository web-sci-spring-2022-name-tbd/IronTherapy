const Workout = require("../models/workout");
const express = require("express");
const router = express.Router();

// Get all workout for a user
router.get("/", async (req, res) => {
  try {
    // Need to put in firebase auth stuff
    const data = await Workout.find({
      // stuff with uid from firebase here
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:name", async (req, res) => {
  try {
    // Need to put in firebase auth stuff
    const data = await Workout.findOne({
      // stuff with uid from firebase here
      name: req.params.name,
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
