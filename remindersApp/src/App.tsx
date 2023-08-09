import { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from './models/reminder'
import reminderServices from './services/reminder'
import NewReminder from "./components/NewReminder";

  

function App() {
const [reminders, setReminders] = useState<Reminder[]>([]);

useEffect(() =>{
loadReminders();
}, [])

const loadReminders = async() => {
  const reminders = await reminderServices.getReminders();
  setReminders(reminders)
}

const removeReminder = (id:number)=>{
  setReminders(reminders.filter(reminder => reminder.id !== id))
}

const addReminder = async(title:string) =>{
  const newReminder = await reminderServices.addReminders(title);
  setReminders([newReminder, ...reminders]);
}

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder}/>
      <ReminderList items={reminders} onRemoveReminder={removeReminder}/>
    </div>
  );
}

export default App;
