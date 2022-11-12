const router = require("express").Router();
const Events = require("../models/events");
const moment = require("moment");
const { json } = require("body-parser");

router.post("create-event", async (req, res) => {
  console.log("hi");
  res.send("hii");
  // const event = Events(req.body);
  // console.log(event, "from index.js backnd create-event");
  // await event.save();
  // res.sendStatus(281);
});

router.get("get-event", async (req, res) => {
  const events = Events.find({
    start: { $gte: moment(req.query.start).toDate() },
    end: { $gte: moment(req.query.end).toDate() },
  });
  console.log(events, "from backend get-event");
  res.send(events);
});

module.exports = router;
