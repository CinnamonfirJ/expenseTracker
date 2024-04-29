const Expense = require("../models/expenseModel");
const mongoose = require("mongoose");

// GET all Workouts
const getExpenses = async (req, res) => {
  const expense = await Expense.find({}).sort({ createdAt: -1 });
  res.status(200).json(expense);
};

// GET single workouts
const getExpense = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "No such Expense!" });
  }

  const expense = await Expense.findById(id);
  console.log(id);

  if (!expense) {
    return res.status(404).json({ err: "No such Expense!" });
  }
  res.status(200).json(expense);
};

// CREATE a new workout
const createExpense = async (req, res) => {
  const { title, amount, currency, category } = req.body;

  try {
    const expense = await Expense.create({ title, amount, currency, category });
    res.status(200).json(expense);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
  res.json({ msg: "POST a new expense" });
};

// DELETE a workout
const deleteExpense = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ err: "No such Expense!" });
  }

  const expense = await Expense.findOneAndDelete({ _id: id });

  if (!expense) {
    res.status(404).json({ err: "No such Expense!" });
  }

  res.status(200).json(expense);
};

// UPDATE a workout
const updateExpense = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ err: "No such Expense!" });
  }

  const expense = await Expense.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!expense) {
    res.status(404).json({ err: "No such Expense!" });
  }

  res.status(200).json(expense);
};

module.exports = {
  createExpense,
  getExpenses,
  getExpense,
  deleteExpense,
  updateExpense,
};
