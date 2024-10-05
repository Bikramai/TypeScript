import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderService from "./services/reminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  },  []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminder();
    setReminders(reminders);
  };

  const removerReminder = (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id))
  }

  return (
    <div className="App">
      <ReminderList items={reminders} onRemoveReminder={removerReminder}/>
    </div>
  );
}

export default App;
