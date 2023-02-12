const express = require("express");
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");
const Task = require("../models/taskModel");
const router = express.Router();

// Create a Task
// router.post("/api/tasks", async (req, res) => {
//   try {
//     const task = await Task.create(req.body);
//     res.status(200).json(task);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// });

// router.post("/api/tasks", createTask);
router.post("/", createTask);

// Get or Read  all Tasks(Data)
// router.get("/api/tasks", async (req, res) => {
//   try {
//     const tasks = await Task.find();
//     res.status(200).json(tasks);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// });

// router.get("/api/tasks", getTasks);
// router.get("/api/tasks/:id", getTask);
// router.delete("/api/tasks/:id", deleteTask);
// router.put("/api/tasks/:id", updateTask);
// router.patch("/api/tasks/:id", updateTask);

// router.get("/", getTasks);
// router.get("/:id", getTask);

router.route("/").get(getTasks).post(createTask);

// router.delete("/:id", deleteTask);
// router.put("/:id", updateTask);
// router.patch("/:id", updateTask);

router.route("/:id").delete(deleteTask).put(updateTask).patch(updateTask).get(getTask);

module.exports = router;
