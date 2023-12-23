const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Expense", expenseSchema);