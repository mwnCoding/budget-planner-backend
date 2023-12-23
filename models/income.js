const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true
        //add enum and default value
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Income", incomeSchema);