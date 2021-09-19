import React, { useContext, useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calender.scss";

// CONTEXT API
const DateContext = React.createContext({
  date: "",
  setDate: () => {},
});

  function MyCalender() {
  const [value, onChange] = useState(new Date());

  const { myDate, setDate } = useContext(DateContext);

  const onChan = (val) => {
    setDate(val);
  };
  return (
    <div>
      <Calendar
        className="myclin"
        onChange={onChange}
        onClickDay={onChan}
        value={value}
      />
    </div>
  );
}

export {MyCalender,DateContext}
