import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <h2>Sandwiches</h2>
            <p>The most fattest cat want sandwiches and it wants it right now</p>
            <p onClick={props.click}>Why don't you give the cat the special sandwich made from the best ingredients ever procured like how {props.username} made it</p>
        </div>
        
    )
};

export default userOutput;