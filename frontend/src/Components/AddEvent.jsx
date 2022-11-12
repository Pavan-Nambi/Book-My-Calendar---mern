import { React, useState } from "react";
import Modal from "react-modal";

import Datetime from "react-datetime";

function AddEvent({ isOpen, onClose, onEventAdded }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());

  const [end, setEnd] = useState(new Date());
  const onSubmit = (e) => {
    e.preventDefault();

    onEventAdded({
      title,
      start,
      end,
    });

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
          <label>start date</label>
          <Datetime
            value={start}
            onChange={(date) => setStart(date)}
          ></Datetime>
        </div>

        <div>
          <label>end date</label>
          <Datetime value={end} onChange={(date) => setEnd(date)}></Datetime>
        </div>

        <button>Add Event</button>
      </form>
    </Modal>
  );
}

export default AddEvent;
