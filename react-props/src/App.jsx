import { useState } from 'react'
import './App.css'
import Component_Card from './Component_Card'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1 className='text-3xl font-bold underline'>Tailwind Uses First Time</h1>
    <br />
    <Component_Card  username = "Pranjal" btntext = 'Visit More'/>
    <Component_Card  username = "Sunny" btntext = 'Visit'/>
    <Component_Card  username = "Giniz" btntext = 'Hello Pranjal'/>
   </>
  )
}

export default App
