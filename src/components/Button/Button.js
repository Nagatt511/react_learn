import React from "react";
import style from './Button.module.css';

export const Button = (props)=>{
    return (
        <button type="button" onClick = {props.onClick}>{props.name} </button>
    )
}