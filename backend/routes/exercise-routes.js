const Exercise = require("../models/exercise");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Need to put in firebase auth stuff
    const data = await Exercise.find({});
    let toReturn = [];
    // Loop through all exercises and add to toReturn
    for (let i = 0; i < data.length; i++) {
      toReturn.push(data[i].name);
    }
    console.log("Got all exercises");
    res.status(200).json(toReturn);
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
