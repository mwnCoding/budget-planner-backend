const express = require("express");
const router = express.Router();

//Get all expenses
router.get("/", (req, res) => {
    res.send("Get all expenses");
});

//Get expense with the specified ID
router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Get expense with the ID ${id}`);
});

//Create a new expense
router.post("/new", (req, res) => {
    const newExpense = {
        value: req.body.value,
        type: req.body.type,
        description: req.body.description
    }
    console.log(newExpense);
    res.send("Created new expense");
});

//Delete expense with the specified ID
router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Deleted expense with the ID ${id}`);
});

//Update expense with the specified ID
router.patch("/update/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Updated expense with the ID ${id}`);
})


module.exports = router;