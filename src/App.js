import React, { useState } from "react";
import TextInput from "./components/text-input/TextInput";
import TipSelector from "./components/tip-selector/TipSelector";
import iconDollar from "./assets/icon-dollar.svg";
import iconPerson from "./assets/icon-person.svg";
import './App.css';
import Results from "./components/results/Results";
import logo from './assets/logo.svg';

export default function App(){
    const [bill, setBill] = useState('');
    const [tip, setTip] = useState('');
    const [people, setPeople] = useState('');
    const outline = people === '0' ? '2px solid #E17052': false;
    
    const billInputHandler = (event) => {
        const re = /^\d+([.]\d+)?([.]?)$/;
        if (re.test(event.target.value) || event.target.value === ''){
            setBill(event.target.value);
        }
    }

    const peopleInputHandler = (event) => {
        const re = /^[0-9]+$/
        if (re.test(event.target.value) || event.target.value === ''){
            setPeople(event.target.value);
        }
    }

    const resetHandler = () => {
        setBill('');
        setTip('');
        setPeople('');
    }

    return (<div id="app">
        <div id='logo-space'>
            <img src={logo} id='logo' alt=''/>
        </div>

        <div id='card'>
            <div id='input'>
                <div className='label' id='bill'>Bill</div>
                <TextInput id="bill" onChange={billInputHandler} value={bill} background={iconDollar}/>
                <div className='label'>Select Tip %</div>
                <TipSelector tip={tip} setTip={setTip} />

                <div className='label' id='people'><span>Number of People</span><span id='zero'>{people === '0' ? "Can't be zero": ""}</span></div>
                <TextInput onChange={peopleInputHandler} value={people} background={iconPerson} outline={outline}/>
            </div>

            <Results people={people} bill={bill} tip={tip} resetHandler={resetHandler} />
        </div>
    </div>)
}
