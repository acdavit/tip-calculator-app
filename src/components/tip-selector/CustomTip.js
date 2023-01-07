import React, { useEffect, useState } from "react";

export default function CustomTip({tip, setTip, fixedPercentages}){
    const [input, setInput] = useState('');

    useEffect(() => {
        if (fixedPercentages.includes(tip)){
            setInput('');
        }
    }, [tip, fixedPercentages])

    const inputHandler = (event) => {
        const re = /^[0-9]+$/;
        if (re.test(event.target.value)){
            setInput(event.target.value);
            setTip(event.target.value);
        } else if (event.target.value === ''){
            setInput(event.target.value)
            setTip(0);
        }
    }

    return (<input type="text" onInput={inputHandler} value={input} placeholder='Custom' className='custom-tip'></input>)
}