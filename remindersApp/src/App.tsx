import { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from './models/reminder'
import reminderServices from './services/reminder'
import NewReminder from "./components/NewReminder";

  

function App() {
const [reminders, setReminders] = useState<Reminder[]>([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState<string | null >(null);

useEffect(() =>{
loadReminders();
}, [])

const loadReminders = async() => {
  setIsLoading(true);
  setError(null);
  
  try{const reminders = await reminderServices.getReminders();
    setReminders(reminders);}
  
  catch(error){setError('An error occured while loading the page')}
  
  setIsLoading(false)



}

const removeReminder = (id:number)=>{
  setReminders(reminders.filter(reminder => reminder.id !== id))
}

const addReminder = async(title:string) =>{
  const newReminder = await reminderServices.addReminders(title);
  setReminders([newReminder, ...reminders]);
}

  return (
    <div className="App font">
      <div className="header">
      <h1 className="text-center">DON'T FORGET</h1>
      </div>
      <NewReminder onAddReminder={addReminder}/>
      {isLoading && <div className="spinner-border"></div>}
      {error && <div className="error-message text-bg-danger">{error}</div>}
      <ReminderList items={reminders} onRemoveReminder={removeReminder}/>
    </div>
  );
}

export default App;
