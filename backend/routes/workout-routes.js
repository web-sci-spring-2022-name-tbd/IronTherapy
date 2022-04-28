const Workout = require("../models/workout");
const Goal = require("../models/goal");
const express = require("express");
const exercise = require("../models/exercise");
const router = express.Router();
const querystring = require('querystring')

// Get all workout for a user
router.get("/", async (req, res) => {
  try {
    const data = await Workout.find({
      uid: req.user.user_id
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get workout based on name
router.get("/:name", async (req, res) => {
  try {
    const data = await Workout.findOne({
      // stuff with uid from firebase here
      uid: req.user.user_id,
      name: req.params.name,
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/addSet', async (req, res) => {
  try {
    const { update, exercise_name, name } = req.body;

    let data = await Workout.findOne({
      uid: req.user.user_id,
      name: name
      // no auth stuff yet
    });

    data.exercises.forEach(async (exercise) => {
      if (exercise.name == exercise_name) {
        exercise.sets.push({ pounds: update.pounds, reps: update.reps })  // or maybe update[0] depending on what update turns out to be

        // Update the goal for this set if it exists and current weight > this weight
        try {
          const goalData = await Goal.findOne({
            uid: req.user.user_id,
            exercise: exercise_name,
          });

          if (goalData && update.pounds > goalData.current) {
            // Update the goal
            await Goal.updateOne({
              uid: req.user.user_id,
              exercise: exercise_name,
            }, {
              current: update.pounds,
            });
          }

        } catch (error) {
          console.log("Could not check goal while updating an exercise: " + error.message);
          res.status(500).json({ message: error.message });
        }
      }
    });

    await Workout.findOneAndUpdate({
      // uid: req.user.user_id,
      name: name,
    }, data);

    res.status(200).json({ message: "exercise updated"});
  } catch (error) {
    console.log("Error updating a exercise: " + error.message);
    res.status(500).json({ message: error.message });
  }
});

//update workout name
router.put("/:name", async (req, res) => {
  name1 = "Failed_name"
  if(req.body.name != null){
    name1 = req.body.name;
  }
  Workout.findOneAndUpdate({
    name: req.params.name,
    uid: req.user.user_id
  }, {
    name: name1
  }, (err, doc, res_) => {
    if (err) return res.status(500).json({error: err.message});
    res.status(200).json({success1: true})
  })
});

//Create new workout with that name
router.post('/:name', async (req, res) => {
  var exercise_pool = [];
  if (req.params.name.includes("Back Workout")) {
    exercise_pool = [
      {
        name: "Pull Ups",
        set: []
      },
      {
        name: "Back Extension",
        set: []
      },
      {
        name: "Pull-down",
        set: []
      },
      {
        name: "Rows",
        set: []
      },
      {
        name: "Bent Over Row",
        set: []
      },
      {
        name: "Renegade Row",
        set: []
      }
    ]
  }
  else if (req.params.name.includes("Chest Workout")) {
    exercise_pool = [
      {
        name: "Bench Press",
        set: []
      },
      {
        name: "Shoulder Press",
        set: []
      },
      {
        name: "Tricep Extension",
        set: []
      },
    ]
  }
  else if (req.params.name.includes("Leg Workout")) {
    exercise_pool = [
      {
        name: "Deadlift",
        set: []
      },
      {
        name: "Overhead Squat",
        set: []
      },
      {
        name: "Barbell Squat",
        set: []
      },
      {
        name: "Farmer's Walk",
        set: []
      },
      {
        name: "Overhead Lunge",
        set: []
      },
      {
        name: "Weighted Step Up",
        set: []
      },
      {
        name: "Clean and Jerk",
        set: []
      },
    ]
  }
  const date = new Date();
  // Data about date
  var dd = date.getDate();
  var mm = date.getMonth() + 1;
  var yyyy = date.getFullYear();
  var year = `${yyyy}`.substring(2);
  var date_obj = `${mm}/${dd}/${year}`;
  try {
    await Workout.create({
      uid: req.user.user_id,
      name: req.params.name,
      exercises: exercise_pool,
      date: date_obj
    });
    console.log("Made a new workout for " + req.user.user_id);
    res.status(201).json({ message: "Workout created" });
  } catch (error) {
    console.log("Error making a Workout: " + error.message);
    res.status(500).json({ message: error.message });
  }
});

router.put('/deleteSet', async (req, res) => {
  try {

    const { update } = req.body;
    const { exercise_name } = req.body;
    // console.log(update)
    // console.log(exercise_name)
    const { name } = req.body;
    // console.log(name)
    // const { exercise_name } = req.params.exercise_name;
    // res.status(200).json(req.body);

    let data = await Workout.findOne({
      uid: req.user.user_id,
      name: name
      // no auth stuff yet
    });

    console.log(data);

    let temp = data.exercises;
    let count = 0;
    data.exercises.forEach(exercise => {

      if (exercise.name == exercise_name) {
        temp[count]["sets"] = update;  // or maybe update[0] depending on what update turns out to be
        return;
      }
      count++;
    });

    await Workout.findOneAndUpdate({
      // uid: req.user.user_id,
      uid: req.user.user_id,
      name: name,
    }, {
      exercises: temp,
    });
    console.log(`updated exercise ${exercise_name} for ${req.user.name} (delete)`)
    // console.log("Updated a exercise for " + req.user.name);
    res.status(200).json({ message: "exercise updated", exercise: temp });
  } catch (error) {
    console.log("Error updating a exercise: " + error.message);
    res.status(500).json({ message: error.message });
  }
});


router.delete('/deleteExercise', async (req, res) => {
  const name = req.query.name;
  const exercise = req.query.exercise;
  let data = await Workout.findOne({
    uid: req.user.user_id,
    name: name
  })

  

  let temp = []
  // console.log(data.exercises)

  data.exercises.forEach(exercise_ => {
    if (exercise_.name != exercise) {
      temp.push(exercise_)
    } else {
      
    }
  })

  Workout.findOneAndUpdate({
    name: name
  }, {
    exercises: temp
  }, (err, doc, res_) => {
    if (err) return res.status(500).json({ error: err.message });
    console.log(`deleted exercise ${exercise} from workout ${name}`);
    res.status(200).json({ success: true })
  })


})

router.put("/addExercise", async (req, res) => {
  const { exercise_name } = req.body;
  // console.log(update)
  // console.log(exercise_name)
  const { name } = req.body;
  // console.log(name)
  // const { exercise_name } = req.params.exercise_name;
  // res.status(200).json(req.body);

  let data = await Workout.findOne({
    name: name
    // no auth stuff yet
  })

  let temp = data.exercises;
  let update = {
    name: exercise_name,
    set: []
  }
  temp.push(update);
  console.log("Adding new exercise...");

  Workout.findOneAndUpdate({
    name: name
  }, {
    exercises: temp
  }, (err, doc, res_) => {
    if (err) return res.status(500).json({ error: err.message });
    console.log(`added exercise ${exercise_name} to workout ${name}`);
    res.status(200).json({ success: true })
  })

});


module.exports = router;
