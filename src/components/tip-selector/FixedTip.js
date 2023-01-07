import React, { useEffect, useState } from "react";

export default function FixedTip({tip, setTip, percentage}){
    const [style, setStyle] = useState({});
    const clickHandler = () => {
        setTip(percentage);
    }

    useEffect(() => {
        if (percentage === tip){
            setStyle({color: '#00474B', background: '#26C2AE'});
        } else {
            setStyle({});
        }
    }, [percentage, tip])

    return (<button onClick={clickHandler} style={style} className='fixed-tip'>{percentage}%</button>)
}