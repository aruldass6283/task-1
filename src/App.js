import logo from './logo.svg';
import './App.css';
import Compb from './Compb';
import Compa from './Compa';
import { useState } from 'react';

function App() {
  const [name,setName]=useState("")
  const [age, setAge]= useState()
  const [userObj, setUserObj]=useState({})
  
  return (
    <div className="App">
      <Compb setName={setName} setAge={setAge} name={name} age={age} setUserObj={setUserObj}/>
      <Compa user={userObj}/>

    </div>
  );
}

export default App;
