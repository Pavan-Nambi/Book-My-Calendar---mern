import { React, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import AddEvent from "./AddEvent";
import axios from "axios";
import moment from "moment";

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [modelOpen, setModelOpen] = useState(false);
  const calendarRef = useRef(null);

  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    console.log("event", event);
    calendarApi.addEvent({
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
      title: event.title,
    });
    console.log("event added");
  };

  async function handleEventAdd(data) {
    console.log("handle event add", data.event);

    await axios.post("http://localhost:5000/api/calendar/create-event");
  }

  async function handleDatesSet(data) {
    const response = await axios.get(
      "http://localhost:5000/api/calendar/get-event?start=" +
        moment(data.start).toISOString() +
        "&ends" +
        moment(data.end).toISOString()
    );
    setEvents(response.data);
  }
  return (
    <section>
      <button onClick={() => setModelOpen(true)}>Add Event</button>
      <div style={{ position: "relative", zIndex: 0 }}>
        <FullCalendar
          ref={calendarRef}
          events={events}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          eventAdd={(event) => handleEventAdd(event)}
          datesSet={(date) => handleDatesSet(date)}
        />
      </div>

      <AddEvent
        isOpen={modelOpen}
        onClose={() => setModelOpen(false)}
        onEventAdded={(event) => onEventAdded(event)}
      ></AddEvent>
    </section>
  );
}
