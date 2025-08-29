
import { useState } from 'react'
import './App.css'
import Usesttatett from './Usesttatett'
import Useeffectttt from './Useeffectttt'

function App() {
  let [color, setColor] = useState("blue")
  return (
    <>
     <h1>my fav color is {color}</h1>
     <button className='butya' onClick={() =>setColor("red")}>color badlawnar ahe</button>
     <Usesttatett />
     <Useeffectttt />
    </>
  )
}

export default App
