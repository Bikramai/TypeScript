import React from "react";
import Reminder from "../models/reminder";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <ul className="list-group">
      {items.map((items) => (
        <li className="list-group-item" key={items.id}>
          {items.title}
          <button
            onClick={() => onRemoveReminder(items.id)}
            className="btn btn-outline-danger mx-3 rounded-pill"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
