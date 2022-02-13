const express = require("express");
const router = express.Router();

const {
  getGoals,
  setGoals,
  patchUpGoals,
  deleteGoals,
  updateGoals,
} = require("../controllers/goalcontrollers");

router.get("/", getGoals);
// router.get("/", (req, res) => {
//   res.status(200).json({ message: `get new Goals` });
// });

router.post("/", setGoals);
// router.post("/", (req, res) => {
//   res.status(200).json({ message: `Create new Goals` });
// });

router.put("/:id", updateGoals);
// router.put("/:id", (req, res) => {
//   res.status(200).json({ message: `Update Goal ${req.params.id}` });
// });

router.delete("/:id", deleteGoals);
router.patch("/:id", patchUpGoals);
module.exports = router;
