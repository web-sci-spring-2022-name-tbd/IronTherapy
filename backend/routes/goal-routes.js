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
    res.status(500).json({ message: error.message });
  }
});

router.get('/:exercise', async (req, res) => {
  // Check to see if goal exists
  try {
    const exists = await Goal.exists({
      uid: req.user.user_id,
      exercise: req.params.exercise,
    });

    // If it exists, attempt to return it
    if (exists) {
      try {
        const data = await Goal.findOne({
          uid: req.user.user_id,
          exercise: req.params.exercise,
        });
        console.log("Returned the goal: " + data.exercise);
        res.status(200).json(data);
      } catch (error) {
        console.log("Could not get goal: " + error.message);
        res.status(500).json({ message: error.message });
      }
    }
    // If it doesn't exist, return a 404
    else {
      console.log("Goal does not exist");
      res.status(404).json({ message: "Goal does not exist" });
    }

  } catch (error) {
    console.log("Could not check goal in GET: " + error.message);
    res.status(500).json({ message: error.message });
  }
});

// Check to see if a goal exists
router.get('/exists/:exercise', async (req, res) => {
  try {
    const data = await Goal.exists({
      uid: req.user.user_id,
      exercise: req.params.exercise,
    });
    console.log("Checked goal: " + req.params.exercise);
    if (data === null) {
      res.status(200).send(false);
    } else {
      res.status(200).send(true);
    }
  } catch (error) {
    console.log("Error checking if goal exists: " + error.message);
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
    // Check to see if goal exists
    try {
      const exists = await Goal.exists({
        uid: req.user.user_id,
        exercise: req.params.exercise,
      });
  
      // If it doesn't exist make the goal
      if (!exists) {
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
      }
      // If it exists, return a 409
      else {
        console.log("Goal already exists");
        res.status(409).json({ message: "Goal already exists" });
      }
  
    } catch (error) {
      console.log("Could not check goal in POST: " + error.message);
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

// Make default goals endpoint here that checks to see if they have 
//  any goals for the exercise, if not, make the three default goals
router.post('/default', async (req, res) => {
  try {
    const data = await Goal.find({
      uid: req.user.user_id,
    });
    if (data.length === 0) {
      await Goal.create({
        uid: req.user.user_id,
        exercise: "Bench",
        target: "150",
        current: "0",
      });
      await Goal.create({
        uid: req.user.user_id,
        exercise: "Squat",
        target: "150",
        current: "0",
      });
      await Goal.create({
        uid: req.user.user_id,
        exercise: "Deadlift",
        target: "150",
        current: "0",
      });

      const allGoals = await Goal.find({
        uid: req.user.user_id,
      });
      console.log("Made default goals for " + req.user.name);
      res.status(200).json(allGoals);
    } else {
      console.log("Default goals already exist for " + req.user.name);

      const allGoals = await Goal.find({
        uid: req.user.user_id,
      });
      res.status(200).json(allGoals);
    }
  } catch {
    console.log("Error making default goals: " + error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

