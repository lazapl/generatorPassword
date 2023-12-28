import React, {useState} from "react";
import './App.css'

function App(){

  const [includeSmallLetters, setIncludeSmallLetters] = useState(false)
  const [includeUpperLetters, setIncludeUpperLetters] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  const [length, setLength] = useState(10)
  const [password, setPassword] = useState('')

  const generatePassword = ()=>{

    const lowerLetters = 'abcdefg'
    const upperLetters = 'ABCDEFG'
    const symbols = '!@#$%^&*()_+'

    let result = ''
    for(let i=0; i<length; i++){
      let validChar = '';
      if(includeSmallLetters) validChar += lowerLetters
      if(includeUpperLetters) validChar += upperLetters
      if(includeSymbols) validChar += symbols

      const randomLetters = Math.floor(Math.random()*validChar.length)

      result += validChar[randomLetters]

      setPassword(result)
    }
  }

  
  return(
    <>
    
    <input type="range" min={1} max={10} onChange={(e)=>setLength(e.target.value)}/><br></br>

    <input type="checkbox" checked={includeSmallLetters} onChange={()=>setIncludeSmallLetters(!includeSmallLetters)}/><span>include small letters</span><br></br>
    <input type="checkbox" checked={includeUpperLetters} onChange={()=>setIncludeUpperLetters(!includeUpperLetters)}/><span>include upper letters</span><br></br>
    <input type="checkbox" checked={includeSymbols} onChange={()=>setIncludeSymbols(!includeSymbols)}/><span>include symbols</span><br></br>
    <div className="column">

    <button onClick={generatePassword}>generuj</button>

    {password}
    </div>
    
    
    </>
  )
  
}
export default App