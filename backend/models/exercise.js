const mongoose = require("mongoose");
const { Schema } = mongoose;

const exerciseSchema = new Schema({
  name: String,
  sets: [
    {
      pounds: Number,
      reps: Number,
    },
  ]
});

module.exports = mongoose.model("Exercise", exerciseSchema, "exercises");
