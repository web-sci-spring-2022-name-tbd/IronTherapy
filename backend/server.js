const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');
const workoutRoutes = require('./routes/workout-routes');
const goalRoutes = require('./routes/goal-routes');
const exerciseRoutes = require('./routes/exercise-routes');
const cors = require('cors');
const path = require('path');

const decode = require('./decode');

mongoose.connect(
  "mongodb+srv://root:Password123@irontherapy.fxgip.mongodb.net/irontherapy?retryWrites=true&w=majority"
);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "../frontend/dist/iron-therapy")));

app.use(bodyParser.json());

app.use('/workouts', decode.decodeToken, workoutRoutes);
app.use("/goals", decode.decodeToken, goalRoutes);
app.use("/exercises", decode.decodeToken, exerciseRoutes);

// This must be the last get statement, dont put any app.use below it
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/iron-therapy/index.html"));
});

// start server
app.listen(3000, function() {
  console.log('Server up on *:3000');
});