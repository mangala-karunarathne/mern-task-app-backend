const dotenv = require("dotenv").config();
const express = require("express");
const { Logger } = require("mongodb");
const connectDB = require("./config/connectDB");
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoute");
const app = express();
const cors = require('cors');

// Middleware
app.use(express.json()); // To use Postman data in console [ need to use json type in postman]
app.use(express.urlencoded({ extended: false })); // To use Postman data in console [ need to use url encoded (Body >> url encoded) type in postman]
// const logger = (req, res, next) => {
//   console.log("Middleware Run");
//   console.log(req.method);
//   next();
// };

// app.use(cors({})); // Now any frontend can access this backend
app.use(cors({
  origin: ["http://localhost:3000/", "https://mern-task-app-2ql0.onrender.com" ]
}));
// app.use(taskRoutes);
app.use("/api/tasks", taskRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Create a Task
// app.post("/api/tasks", logger, async (req, res) => {
// app.post("/api/tasks", async (req, res) => {
//   try {
//     const task = await Task.create(req.body);
//     res.status(200).json(task);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// });

// Get or Read Task(Data)
// app.get("/api/tasks", async (req, res) => {
//   try {
//     const tasks = await Task.find();
//     res.status(200).json(tasks);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// });

const PORT = process.env.PORT || 5000;

const startServer = async (arg) => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
