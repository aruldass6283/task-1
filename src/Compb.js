import React, { createContext, useState } from 'react';

function Compb({setName,setAge,name,age,setUserObj}) {
    
 function objCreate(){
    setUserObj({Name: name, Age: age})
 }
 
  
    return (
        
        <div>
            <p>Component B</p>
            <label>Name</label>
            <input onChange={(e)=>{setName(e.target.value)}}></input>
            <lable>Age</lable>
            <input onChange={(e)=>{setAge(e.target.value)}}></input>
            <button onClick={()=>objCreate()}>Submit</button>
        </div>
       
    );
}

export default Compb;