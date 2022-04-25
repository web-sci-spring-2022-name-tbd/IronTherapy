const Goal = require('../models/goal');
const express = require("express");
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Need to put in firebase auth stuff
    const data = await Goal.find({
      // stuff with uid from firebase here
    });
    console.log("Returned all the goals");
    res.json(data);
  } catch (error) {
    console.log("Error getting goals: " + error.message);
    res.status(500).json({message: error.message});
  }
});

router.get('/:exercise', async (req, res) => {
  try {
    // Need to put in firebase auth stuff
    const data = await Goal.findOne({
      // stuff with uid from firebase here
      exercise: req.params.exercise,
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    await Goal.create({
      uid: req.user.user_id,
      exercise: req.body.exercise,
      target: req.body.target,
      current: req.body.current,
    });
    console.log("Made a new goal for " + req.user.name);
    res.status(201).json({message: "Goal created"});
  } catch (error) {
    console.log("Error making a goal: " + error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
