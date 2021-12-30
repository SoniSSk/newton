import React, { useState } from 'react'

function App() {
  
  const [state, setState] = useState(20)
  const [state1, setState1] = useState("")
const handleCharLimit = (event) =>{
  setState(event.target.value);
}
const handlestate1 = (event) =>{
 if (state1.length <=state){
  setState1(event.target.value);
}
else{
  setState1("");
}


}
const [state2, setState2] = useState(50);
const handlestate2 = (event) =>{
 
  setState2(event.target.value);
}
const [state3, setState3] = useState(50);
const handlestate3 = (event) =>{
 
  setState3(event.target.value);
}

  return (
    <div>
      <p>Char Limit:-<input value={state} onChange={handleCharLimit} type ="number"></input> <input type="color" value={state3} onChange={handlestate3}></input>  
      <input value={state1} onChange={handlestate1} ></input><input type ="range" min ="1" max="100" value ={state2} onChange={handlestate2} ></input></p>
      <div style={{background: "red", }}><p>{state1}</p></div>
    
     
    </div>
  )
}

export default App
