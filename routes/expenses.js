const express = require("express");
const router = express.Router();

const Expense = require("../models/expense");

//Get all expenses
router.get("/", async (req, res) => {
    try {
        const expenses = await Expense.find({});
        res.send(expenses);
    } catch {
        res.send("Error getting all expenses");
    }
});

//Get expense with the specified ID
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const expense = await Expense.findById(id);
        res.send(expense);
    } catch {
        res.send("Error getting specified expense");
    }
});

//Create a new expense
router.post("/new", async (req, res) => {
    const newExpense = new Expense( {
        value: req.body.value,
        type: req.body.type,
        description: req.body.description
    });
    try {
        const savedExpense = await newExpense.save();
        res.send("Expense succesfully created"); 
    } catch {
        res.send("Error creating new expense");
    }

    });

//Delete expense with the specified ID
router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
   try {
        const deletedExpense = await Expense.findByIdAndDelete(id);
        res.send("Expens deleted succesfully");
    } catch {
        res.send("Error deleting expense");
    }
});

//Update expense with the specified ID
router.patch("/update/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const updatedExpense = await Expense.findByIdAndUpdate(id, {
            value: req.body.value,
            type: req.body.value,
            description: req.body.value 
        });
        res.send("Expense succesfully updated");
    } catch {
        res.send("Error updating expense");
    }
})


module.exports = router;