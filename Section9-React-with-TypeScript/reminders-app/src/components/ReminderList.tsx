import React from 'react';
import Reminder from '../models/reminder';

interface ReminderListProps {
    items: Reminder[]
}

function ReminderList({ items }: ReminderListProps) {
    return (
        <ul className='list-group'>
            {items.map(items => <li className='list-group-item' key={ items.id}>{items.title}</li>)}
        </ul>
    );
}

export default ReminderList;