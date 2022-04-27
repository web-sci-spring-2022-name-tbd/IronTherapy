const mongoose = require('mongoose');
const { Schema } = mongoose;

const workoutSchema = new Schema({
  uid: String,
  name: String,
  date: String,
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