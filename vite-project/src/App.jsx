import { useState } from "react"
import './Index.css';


function App() {

  const [color , setColor] = useState('Olive');
  return (
    <div className="w-full h-screen duration-200" style={{background : color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=> setColor('Red')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background : "Red"}}>
            Red
          </button>
          <button onClick={()=> setColor('Green')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background : "green"}}>
            Green
          </button>
          <button onClick={()=> setColor('blue')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{background : "blue"}}>
            Blue
          </button>
          <button onClick={()=> setColor('white')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{background : "white"}}>
            White
          </button>
          <button onClick={()=> setColor('purple')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{background : "purple"}}>
            Purpule
          </button>
           <button onClick={()=> setColor('pink')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{background : "pink"}}>
            Pink
          </button>
          <button onClick={()=> setColor('black')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{background : "black"}}>
            Black
          </button>
          <button onClick={()=> setColor('Grey')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{background : "Grey"}}>
             Grey
          </button>
        </div>
      </div>
    </div>
  )
}

export default App