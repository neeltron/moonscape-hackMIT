import React from "react";
import "./style2.scss";
import { PieChart } from 'react-minimal-pie-chart';



export default function SleepCycle() {
  return (
    <div className="sleepCycle">
    <div className="s-head">
      <h2>Sleep cycle</h2>
      <p>28th Oct 2021</p>

</div>

      <div className="bar-g">
      <PieChart
  data={[
    { title: 'One', value: 10, color: '#09C4FF' },
    { title: 'Two', value: 15, color: '#EB09FF' },
  ]}
/>

      </div>
      <div className="day-data">
      <div className="d-block">
      <h2>Total Hours  </h2>
      <h3 id="s-done">9 hr 30 min</h3>
      </div>
      <div className="d-block">
      <h2>Remaining Hours </h2>
      <h3 id="s-left">9 hr 30 min</h3>
      </div>

      </div>
    </div>
  );
}
