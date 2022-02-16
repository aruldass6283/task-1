import React from 'react';
import{useContext} from 'react'

function Compa({user}) {

    return (
        <div>
            <p>Component A</p>
            {/* <h1>{name}</h1>
            <h1>{age}</h1> */}
        <label>Name:</label>
        <label>{user.Name}</label><br></br>
        <label>Age:</label>
        <label>{user.Age}</label>
        </div>
    );
}

export default Compa;