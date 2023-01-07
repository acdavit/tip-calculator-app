import React from "react";
import CustomTip from "./CustomTip";
import FixedTip from "./FixedTip";
import './tip-selector.css'

export default function TipSelector({tip, setTip}){
    const fixedPercentages = [5, 10, 15, 25, 50]

    return (<div id='tip-selector'>
        {fixedPercentages.map((item) => <FixedTip percentage={item} tip={tip} setTip={setTip} key={item}/>)}
        <CustomTip tip={tip} setTip={setTip} fixedPercentages={fixedPercentages} />
    </div>)
}