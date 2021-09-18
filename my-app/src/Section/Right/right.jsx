import React from "react";
import ImageUI from "../../components/Image-UI/header"
import MyCalender from "../../components/calender/calender"
import SleepCycle from "../../components/Sleep cycle/Sleep-cycle"

import "./right.scss"
export default function Right(){
    return (
        <div className="right">
        <ImageUI/>
        <MyCalender/>
        <SleepCycle/>
        </div>

    )
}