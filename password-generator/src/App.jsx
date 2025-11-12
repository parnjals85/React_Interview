import { useCallback, useState , useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(5)
  const [char , setChar] = useState(false);
  const [Number , setNumber] = useState(false);
  const [password , setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordgenerator = useCallback(()=>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(Number){
      str += '123456789'
    }
    if(char){
      str += '!@#$%^&*-_+=[]{}~`'
    }
    for(let i = 0; i<length ; i++){
      let char2 = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char2)
    }
    setPassword(pass);
  },[length , Number , char , setPassword]);

  const copy = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password);
  })

  useEffect(()=>{
    passwordgenerator()
  },[length , Number , char , passwordgenerator])

  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
     <h1 className='text-white text-center my-3'>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type='text' 
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={passwordRef}></input>
      <button onClick={copy}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
        Copy
      </button>
     </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type='range' 
        min={5}
        max={101}
        className='cursor-pointer'
        onChange={(e)=>{
          setLength(e.target.value)
        }}></input>
        <label>Length : {length}</label>
      </div>
      <div className='flex-items-center gap-x-1'>
        <input type='checkbox'
        defaultChecked ={Number}
        onChange={()=>{
          setNumber((prev)=>!prev)
        }}/>
        <label htmlFor=''> Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type='checkbox'
        defaultChecked={char}
        onChange={()=>{
          setChar((prev) => !prev)
        }}/>
        <label htmlFor=''>Character's</label>
      </div>
     </div>
   </div>
  )
}

export default App
