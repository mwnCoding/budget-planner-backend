const express = require("express");
const router = express.Router();

//Get all incomes
router.get("/", (req, res) => {
    res.send("Get all incomes");
});

//Get income with specific ID
router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Get income with the id ${id}`);
});

//Create new income
router.post("/new", (req, res) => {
    const newIncome = {
        value: req.body.value,
        type: req.body.type,
        description: req.body.type
    }
    console.log(newIncome);
    res.send("Created new income");
});

//Delete income
router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Deleted income with the ID ${id}`);
});

//Update income with specific ID
router.patch("/update/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Updated inome with the ID ${id}`);
});

module.exports = router;