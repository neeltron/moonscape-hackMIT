import React, { useState } from "react";
import "./left.scss";
import Demo from "../../components/Bargraph/bar";
import SleepQuality from "../../components/sleep-quality/quality";
import sym from "./sym.png";
import { mdata1, mdata2, mdata3 } from "../../data/bar-graph";
import { options2, options1, options3 } from "../../data/sleep-quality";

const Sleepdisturbance = ["12%", "50%", "45%", "50%", "76%"];
const AverageHours = ["6hr", "8hr", "7.5hr", "6.4hr", "8"];
const AverageDeepsleep = ["12%", "50%", "45%", "50%", "76%"];

const graphData = [mdata1, mdata2, mdata3];
const sleepQualityData_ = [options1, options2, options3];
let num = 0;

export default function Left() {
  const [data, setData] = useState(graphData[num]);
  const [sleepQualityData, setsleepQualityData] = useState(
    sleepQualityData_[num]
  );
  const [sleepD, setSleepD] = useState(
    Sleepdisturbance[Math.floor(Math.random() * 4)]
  );
  const [MyAverageHours, setAverageHours] = useState(AverageHours[0]);
  const [MyAverageDeepsleep, setAverageDeepsleep] = useState(
    AverageDeepsleep[Math.floor(Math.random() * 4)]
  );

  const Onclick = () => {
    if (num == 2) {
      num = 0;
    } else {
      num++;
    }
    setData(graphData[num]);
    setsleepQualityData(sleepQualityData_[num]);
    setSleepD(Sleepdisturbance[Math.floor(Math.random() * 4)]);
    setAverageHours(Sleepdisturbance[Math.floor(Math.random() * 4)]);
    setAverageDeepsleep(Sleepdisturbance[Math.floor(Math.random() * 4)]);
  };

  return (
    <div className="left">
      <div className="r-heading">
        <h2>Monthly Sleep pattern analysis</h2>
        <p>Data is analyzed using lorem ipsim </p>
      </div>
      <button onClick={Onclick}>Forward</button>

      <div className="r-bar-graph">
        <Demo data={data} />
      </div>
      <div className="bar-label">
        <p>Weeks vs hours sleep </p>
      </div>
      <div className="bar-label-2">
        <p>Total Hours </p>
      </div>
      <div className="r-sleep-q">
        <SleepQuality options={sleepQualityData} />
      </div>
      <div className="bar-label-s">
        <p>Weeks vs sleep quality </p>
      </div>
      <div className="bar-label-s2">
        <p>10 20 30 40 50 60 70 80 90 100</p>
      </div>
      {/* <img src={pattern}/> */}

      <div className="Overall">
        <h2>Overall Results :</h2>
        <div className="o-single">
          <img src={sym} />
          <p>Sleep disturbance</p>
          <h2>{sleepD}</h2>
        </div>
        <div className="o-single">
          <img src={sym} />

          <p>Average Hours</p>
          <h2>{MyAverageHours}</h2>
        </div>
        <div className="o-single">
          <img src={sym} />

          <p>Average Deep sleep </p>
          <h2>{MyAverageDeepsleep}</h2>
        </div>
      </div>
    </div>
  );
}
