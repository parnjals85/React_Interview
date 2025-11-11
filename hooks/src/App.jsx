import { useState } from 'react'
import './pranjal.css'


function App() {
  const [counter , SetCounter] = useState(15);

  const addvalue = ()=>{
    if(counter <= 19){
       SetCounter(counter +1);
    }
  }

  const removevalue = ()=>{
    if(counter >=1){
      SetCounter(counter -1)
      }
  }
   
  return (
   <>
    {/* More Logic -- like -- number on tab+ not exceed more than 20 and in remove button not come to Minus */}
    <h1>Welcome To My New Project</h1>
    <h2>Counter App {counter}</h2>
    <button onClick={addvalue}>
      Adding {counter}
    </button>
    <button onClick={removevalue}>
      Removing {counter}
    </button>

</>
  )
}

export default App
