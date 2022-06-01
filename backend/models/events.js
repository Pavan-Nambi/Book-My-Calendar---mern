const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  starts: Date,
  end: Date,
  title: String,
});

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;
