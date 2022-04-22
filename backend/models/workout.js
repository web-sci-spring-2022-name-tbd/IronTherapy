const mongoose = require('mongoose');
const { Schema } = mongoose;

const workoutSchema = new Schema({
  uid: Number,
  name: String,
  exercises: [
    {
      name: String,
      sets: [
        {
          pounds: Number,
          reps: Number,
        },
      ]
    },
  ]
});

module.exports = mongoose.model("Workout", workoutSchema, "workouts");