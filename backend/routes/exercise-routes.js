const Exercise = require("../models/exercise");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {

    let toReturn = (await Exercise.find({})).map((exercise) => exercise.name);
    console.log("Got all exercises");
    console.log(toReturn)
    res.status(200).json(toReturn);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
