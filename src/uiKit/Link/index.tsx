import React from 'react';
import ReactDOM from 'react-dom';
import "./link.module.css"

interface LinkConfig{
    text:String;
    handleClick:Function;
};

export const Link : React.FC<LinkConfig> = (props) => {
    return (
        <button className="linkBtn" onClick={()=> props.handleClick()}>{props.text}</button>
    );
}