const express = require("express");
const router = express.Router();

const User = require("../models/user")

//Get all users route
router.get("/", async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch {
        res.send("Error getting all users");
    }
});


//Create new user
router.post("/new", async (req, res) => {
    console.log(req.body.name);
    const newUser = new User({
        name: req.body.name,
        password: req.body.password
    })
    try {
        const savedUser = await newUser.save();
        res.send("Created User sucesfully");
        console.log("Sucessfully saved user ", savedUser);
    } catch {
        res.send("Error saving new user to database");
        console.log("Error saving new user to database");
    }
});

//Get user with specific ID
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        console.log(`Fetched user with ${id}`);
        res.json(user);
    } catch {
        console.log("Error getting specified user")
    }
});

//Delete user with specific ID
router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        res.send("User succesfully deleted");
    } catch {
        res.send("Error deleting user");
    }
});

//Update user with specific ID
router.patch("/update/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            name: req.body.name,
            password: req.body.password
        })
        res.send("User sucessfully updated");
    } catch {
        res.send("Error updating user");
    }
});

module.exports = router;