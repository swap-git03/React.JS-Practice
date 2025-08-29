
import { useState } from 'react'
import './App.css'
import Count from './Count'

function App() {
  let [color, setColor] = useState("blue")
  return (
    <>
     <h1>my fav color is {color}</h1>
     <button className='butya' onClick={() =>setColor("red")}>color badlawnar ahe</button>
     <Count />
    </>
  )
}

export default App
