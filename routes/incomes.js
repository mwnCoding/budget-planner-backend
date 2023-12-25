const express = require("express");
const router = express.Router();

const Income = require("../models/income");

//Get all incomes
router.get("/", async (req, res) => {
    try {
        const incomes = await Income.find({});
        res.send(incomes);
    } catch {
        res.send("Error getting all incomes");
    }
});

//Get income with specific ID
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const income = await Income.findById(id);
        res.send(income);
    } catch {
        res.send("Error getting specified income");
    }
});

//Create new income
router.post("/new", async (req, res) => {
    const newIncome = new Income({
        value: req.body.value,
        type: req.body.type,
        description: req.body.description
    })
    try {
        const savedIncome = await newIncome.save();
        res.send("Income sucessfully created");
    } catch {
        res.send("Error creating new income");
    }
});

//Delete income
router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deletedIncome = await Income.findByIdAndDelete(id);
        res.send("Income deleted succesfully");
    } catch {
        res.send("Error deleting income");
    }
});

//Update income with specific ID
router.patch("/update/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const updatedIncome = await Income.findByIdAndUpdate(id, {
            value: req.body.value,
            type: req.body.type,
            description: req.body.description
        });
        res.send("Income updated succesfully")
    } catch {
        res.send("Error updating income");
    }
});

module.exports = router;