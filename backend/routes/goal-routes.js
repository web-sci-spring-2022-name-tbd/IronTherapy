const Goal = require('../models/goal');
const express = require("express");
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await Goal.find({
      uid: req.user.user_id,
    });
    console.log("Returned all the goals for user: " + req.user.name);
    res.json(data);
  } catch (error) {
    console.log("Error getting goals: " + error.message);
    res.status(500).json({message: error.message});
  }
});

router.get('/:exercise', async (req, res) => {
  try {
    const data = await Goal.findOne({
      uid: req.user.user_id,
      exercise: req.params.exercise,
    });
    console.log("Returned a goal for user: " + req.user.name);
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
    res.status(201).json({ message: "Goal created" });
  } catch (error) {
    console.log("Error making a goal: " + error.message);
    res.status(500).json({ message: error.message });
  }
});

router.put('/:exercise', async (req, res) => {
  try {
    await Goal.findOneAndUpdate({
      uid: req.user.user_id,
      exercise: req.params.exercise,
    }, {
      $set: {
        target: req.body.target,
        current: req.body.current,
      },
    });
    console.log("Updated a goal for " + req.user.name);
    res.status(200).json({ message: "Goal updated" });
  } catch (error) {
    console.log("Error updating a goal: " + error.message);
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:exercise', async (req, res) => {
  try {
    await Goal.deleteOne({
      uid: req.user.user_id,
      exercise: req.params.exercise,
    });
    console.log("Deleted a goal for " + req.user.name);
    res.status(200).json({ message: "Goal deleted" });
  } catch (error) {
    console.log("Error deleting a goal: " + error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
