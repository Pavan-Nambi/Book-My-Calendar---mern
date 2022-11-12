// require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = 5000;

const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
};

corsOptions.credentials = true;
app.use(cors(corsOptions));

app.use(bodyParser.json);

// mongoose.connect(, () =>
//   console.log("connected to mongodb")
// );
const mongoURI = "mongodb://localhost:27017/calendar";
mongoose.connect(
  mongoURI,

  (err) => {
    if (err) throw err;
    console.log("connected");
    console.log(mongoose.connection.readyState);
  }
);
app.get("/", (req, res) => {
  res.status(200).send("<p>hello</p>");
});
app.use("/api/calendar", require("./Controllers/Calendar"));
app.listen(PORT, () => console.log("server listening", PORT));
