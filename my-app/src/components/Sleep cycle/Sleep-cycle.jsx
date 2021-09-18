import React from "react";
import "./style2.scss";
import { PieChart } from "react-minimal-pie-chart";

export default function SleepCycle(props) {

  let val_1=Math.floor(Math.random() * 10+1)  
  let val_2=Math.floor(Math.random() * 7+1)  


  console.log(props.date[1]);
  return (
    <div className="sleepCycle">
      <div className="s-head">
        <h2>Sleep cycle</h2>
        <p>{props.date.toString()}</p>
      </div>

      <div className="bar-g">
        <PieChart
          data={[
            {
              title: "One",
              value:val_1,
              color: "#09C4FF",
            },
            {
              title: "Two",
              value:val_2,
              color: "#EB09FF",
            },
          ]}
        />
      </div>
      <div className="day-data">
        <div className="d-block">
          <h2>Total Hours </h2>
          <h3 id="s-done">{val_1} hr 30 min</h3>
        </div>
        <div className="d-block">
          <h2>Remaining Hours </h2>
          <h3 id="s-left">{val_2} hr 30 min</h3>
        </div>
      </div>
    </div>
  );
}
