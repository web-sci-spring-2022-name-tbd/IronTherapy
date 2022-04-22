const mongoose = require("mongoose");
const { Schema } = mongoose;

const exerciseSchema = new Schema({
  name: String,
});

module.exports = mongoose.model("Exercise", exerciseSchema, "exercises");
