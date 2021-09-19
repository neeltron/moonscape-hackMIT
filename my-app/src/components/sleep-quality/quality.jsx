import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";



export default function SleepQuality(props) {
    return(
  <div>
    <HighchartsReact highcharts={Highcharts} options={props.options} />
  </div>
);
}
