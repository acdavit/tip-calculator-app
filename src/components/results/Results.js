import React from "react";
import './results.css';


export default function Results(props) {
    const people = Number(props.people);
    const bill = Number(props.bill);
    const tip = bill / 100 * Number(props.tip);

    
    return (<div id='results'>
        <div className='result-container'>
            <div className='labels-container'>
                <h1>Tip Amount</h1>
                <h2>/ person</h2>
            </div>
            <div className='price'>${!(people === 0) ? (tip / people).toFixed(2) : 0}</div>
        </div>

        <div className='result-container'>
            <div className='labels-container'>
                <h1>Total</h1>
                <h2>/ person</h2>
            </div>
            <div className='price'>${!(people === 0) ? ((bill + tip) / people).toFixed(2) : 0}</div>
        </div>

        <button id='reset' onClick={props.resetHandler}>Reset</button>
    </div>)
}