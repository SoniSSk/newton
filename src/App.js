import React, { useState } from 'react'

function App() {
  const [state, setState] = useState(20)
  const [state1, setState1] = useState("")
const handleCharLimit = (event) =>{
  setState(event.target.value);
}
const handlestate1 = (event) =>{
 alert(state1.length);
  setState1(event.target.value);

}
const [state2, setState2] = useState(50);
const handlestate2 = (event) =>{
  setState2(event.target.value);
}

  return (
    <div>
      <p>Char Limit:-<input value={state} onChange={handleCharLimit} ></input> <input ></input>  
      <input value={state1} onChange={handlestate1} ></input><input type ="range" min ="1" max="100" value ={state2} ></input></p>
      <div style={{background: "red"}}>{state1}</div>
     
    </div>
  )
}

export default App
