require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const expenseRoutes = require("./routes/expenses");

// express app
const app = express();

// cors
app.use(
  cors({
    origin: "http://localhost:4000",
  })
);

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/expenses/", expenseRoutes);

// coonect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log(" Connected to db & Listening on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
