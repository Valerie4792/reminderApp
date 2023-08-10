import Reminder from "../models/reminder";

//above interface is to create the shape of the Reminder props, similar to an object array
interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id:number) => void
}

const ReminderList = ({ items, onRemoveReminder }: ReminderListProps) => {
  return (

    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item d-flex justify-content-between" key={item.id}>
          {item.title}
          <button onClick={()=>onRemoveReminder(item.id)} className="btn delete rounded-pill mx-1">Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ReminderList;
