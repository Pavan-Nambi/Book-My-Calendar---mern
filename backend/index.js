require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json);

mongoose.connect(
  process.env.MONGODB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log("connected to mongodb")
);
app.use("/api/calendar", require("./Controllers/Calendar"));
app.listen(5000, () => console.log("server listening"));
