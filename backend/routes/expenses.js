const express = require("express");
const {
  createExpense,
  getExpenses,
  getExpense,
  deleteExpense,
  updateExpense,
} = require("../controllers/expenseController");

const router = express.Router();

// get all expenses
router.get("/", getExpenses);

// get single expense
router.get("/:id", getExpense);

// post a new expense
router.post("/", createExpense);

// delete a expense
router.delete("/:id", deleteExpense);

// update a expense
router.patch("/:id", updateExpense);

module.exports = router;
