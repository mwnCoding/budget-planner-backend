const express = require("express");
const router = express.Router();

//Get all users route
router.get("/", (req, res) => {
    res.send("Get all users");
});


//Create new user
router.post("/new", (req, res) => {
    const newUser = {
        name: req.body.name,
        password: req.body.password
    }
    console.log(newUser);
    res.send("Create new user");
});

//Get user with specific ID
router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Get user with the ID ${id}`)
});

//Delete user with specific ID
router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Deleted user with the ID ${id}`);
});

//Update user with specific ID
router.patch("/update/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Updated user with the ID ${id}`);
});

module.exports = router;