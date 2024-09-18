import React from 'react';
import Reminder from '../models/reminder';



interface ReminderListProps {
    items: Reminder[]
}

function ReminderList({ items }: ReminderListProps) {
    return (
        <ul>
            {items.map(items => <li key={ items.id}>{items.title}</li>)}
        </ul>
    );
}

export default ReminderList;