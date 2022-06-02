import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

export default function Calendar() {
  return (
    <section>
      <button>Add Event</button>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </section>
  );
}
