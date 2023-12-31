if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const cors = require("cors");
app.use(cors())


const indexRouter = require("./routes/index");
const userRouter =  require("./routes/users");
const incomeRouter = require("./routes/incomes");
const expenseRouter = require("./routes/expenses");

console.log(process.env.DATABASE_URL)

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/incomes", incomeRouter);
app.use("/expenses", expenseRouter);

app.listen(5000, () => {console.log("Server listening to port 5000")});

