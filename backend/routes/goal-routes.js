const Goal = require('../models/goal');
const express = require("express");
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Need to put in firebase auth stuff
    const data = await Goal.find({
      // stuff with uid from firebase here
    });
    res.json(data);
  } catch (error) {
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

module.exports = router;
