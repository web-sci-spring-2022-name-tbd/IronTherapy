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


router.put('/', async (req, res) => {
  try {
    let doc = await Workout.findOneAndUpdate({
      
    });
    console.log("Made a new goal for " + req.user.name);
    res.status(201).json({ message: "Goal created" });
  } catch (error) {
    console.log("Error making a goal: " + error.message);
    res.status(500).json({ message: error.message });
  }
});


router.post('/:name', async (req, res) => {
  try {
    await Workout.create({
      uid: req.user.user_id,
      name: req.params.name,
      exercises: [],
    });
    console.log("Made a new workout for " + req.user.user_id);
    res.status(201).json({ message: "Goal created" });
  } catch (error) {
    console.log("Error making a goal: " + error.message);
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
