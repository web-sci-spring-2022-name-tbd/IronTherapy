const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');
const workoutRoutes = require('./routes/workout-routes');
const goalRoutes = require('./routes/goal-routes');
const exerciseRoutes = require('./routes/exercise-routes');
const cors = require('cors');

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

app.use(express.static('public'));

app.use(bodyParser.json());

app.use('/workouts', workoutRoutes);
app.use("/goals", goalRoutes);
app.use("/exercises", exerciseRoutes);

// server route handler
app.get('/', function(req, res) {
  console.log("Base endpoint hit");
  res.send({ data: 'null' });
});

// start server
app.listen(3000, function() {
  console.log('Server up on *:3000');
});