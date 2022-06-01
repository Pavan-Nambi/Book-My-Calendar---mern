const router = require("express").Router();
const Events = require("../models/events");
const moment = require("moment");

router.past("create-event", async (req, res) => {
  const event = Events(req.body);
  await event.save();
  res.sendStatus(281);
});

router.get("get-event", async (req, res) => {
  const events = Events.find({
    start: { $gte: moment(req.query.start).toDate() },
    end: { $gte: moment(req.query.end).toDate() },
  });
  res.send(events);
});

module.exports = router;
