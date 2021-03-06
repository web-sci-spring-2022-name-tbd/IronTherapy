const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const workoutRoutes = require("./routes/workout-routes");
const goalRoutes = require("./routes/goal-routes");
const exerciseRoutes = require("./routes/exercise-routes");
const cors = require("cors");
const path = require("path");
const rateLimit = require("express-rate-limit");

const decode = require("./decode");

// DB connection stuff
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

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const app = express();

// Do cors stuff on all requests
app
  .use(cors())
  // Add the static dir from frontend
  .use(express.static(path.join(__dirname, "../frontend/dist/iron-therapy")))
  // Parse body on all requests
  .use(bodyParser.json())
  // Rate limit all requests
  .use(limiter)
  // Endpoints
  .use("/workouts", decode.decodeToken, workoutRoutes)
  .use("/goals", decode.decodeToken, goalRoutes)
  .use("/exercises", decode.decodeToken, exerciseRoutes);

// This must be the last get statement, dont put any app.use below it
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../frontend/dist/iron-therapy/index.html")
  );
});

// start server
app.listen(3000, function () {
  console.log("Server up on *:3000");
});
