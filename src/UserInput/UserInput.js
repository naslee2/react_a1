import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="UserInput">
        <h2>Cats</h2>
        <p>I am {props.name}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default userInput;