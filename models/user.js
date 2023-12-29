const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    incomes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Income"
    }],
    expenes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Expense"
    }],
    balance: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("User", userSchema);