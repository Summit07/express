const asyncHandler = require("express-async-handler");
const Goal = require("../modals/goalsModal");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please new error detected");
  }
  const goal = await Goal.create({ text: req.body.text });
  res.status(200).json(goal);
});

const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not Found");
  }
  const updatedGoal = await Goal.findById(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
  // res.status(200).json({ message: `Update Goal ${req.params.id}` });
});

const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal is not found");
  }
  await goal.remove(req.params.id);
  res.status(200).json({ message: `Deleted Goal ${req.params.id}` });
});

const patchUpGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Patch Goal not Found");
  }
  const patchUpdatedGoal = await Goal.findById(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(patchUpdatedGoal);
});

module.exports = { getGoals, setGoals, updateGoals, deleteGoals, patchUpGoals };
