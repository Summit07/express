const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get new Goals` });
});
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please new error detected");
  }
  res.status(200).json({ message: `Create new Goals` });
});
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` });
});
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
});
const patchUpGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Patch update Goals  ${req.params.id}` });
});

module.exports = { getGoals, setGoals, updateGoals, deleteGoals, patchUpGoals };
