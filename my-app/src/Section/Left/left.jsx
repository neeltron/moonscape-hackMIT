import React,{useState} from "react";
import "./left.scss";
import Demo from "../../components/Bargraph/bar";
import SleepQuality from "../../components/sleep-quality/quality";
import sym from "./sym.png";
import {mdata,mdata2} from "../../data/bar-graph"
import {options2,options} from "../../data/sleep-quality"
export default function Left() {


    const [data, setData] = useState(mdata);
    const [sleepQualityData, setsleepQualityData] = useState(options);


    const Onclick=()=>{
        setData(mdata2)
        setsleepQualityData(options2)
    }

  return (
    <div className="left">
      <div className="r-heading">
        <h2>Monthly Sleep pattern analysis</h2>
        <p>Data is analyzed using lorem ipsim </p>
      </div>
      <button
      onClick={Onclick}
      >Forward</button>

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
        <SleepQuality options={sleepQualityData}/>
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
          <h2>50%</h2>
        </div>
        <div className="o-single">
          <img src={sym} />

          <p>Sleep disturbance</p>
          <h2>50%</h2>
        </div>
        <div className="o-single">
          <img src={sym} />

          <p>Sleep disturbance</p>
          <h2>50%</h2>
        </div>
      </div>
    </div>
  );
}
