import React , { useState,useEffect }from "react";
import ImageUI from "../../components/Image-UI/header"
import {MyCalender,DateContext} from "../../components/calender/calender"
import SleepCycle from "../../components/Sleep cycle/Sleep-cycle"

import "./right.scss"
export default function Right(){
let temp=new Date()
    const [date, setDate] = useState("temp");
    const LoadingContextValue = { date, setDate };
    console.log(date)
    return (
        <DateContext.Provider value={LoadingContextValue}>
        <div className="right">
        <ImageUI/>
        <MyCalender/>
        <SleepCycle date={date}/>
        
        </div>
        </DateContext.Provider>
    )
}