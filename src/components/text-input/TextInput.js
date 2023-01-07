import React from "react";
import './text-input.css';

export default function TextInput(props){
    const style = props.outline ? {
        background: `url(${props.background}) no-repeat 20px 50%, #F3F9FA`,
        outline: props.outline
    } : {
        background: `url(${props.background}) no-repeat 20px 50%, #F3F9FA`
    }
    
    return (
        <input
            type="text" 
            onInput={props.onChange} 
            value={props.value} 
            id={props.id}
            className="text-input"
            style={style}
            placeholder='0'>
        </input>
    )
}