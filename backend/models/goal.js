const mongoose = require("mongoose");
const { Schema } = mongoose;

const goalSchema = new Schema({
  uid: String,
  exercise: String,
  target: Number,
  current: Number,
});

module.exports = mongoose.model('Goal', goalSchema, 'goals');
