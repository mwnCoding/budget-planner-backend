if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();

const indexRouter = require("./routes/index");

console.log(process.env.DATABASE_URL)

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

app.use("/", indexRouter);

app.listen(5000, () => {console.log("Server listening to port 5000")});

