const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);

// app.get("/api/goals", (req, res) => {
//   res.status(200).json({ message: `Get new Goals` });
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
