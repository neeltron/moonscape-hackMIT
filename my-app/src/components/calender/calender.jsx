import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./calender.scss"
export default function MyCalender() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
      className="myclin"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}