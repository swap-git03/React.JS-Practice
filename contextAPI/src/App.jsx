import { useContext } from 'react'
import './App.css'
import { Kahani } from './context/Story'

function App() {

  let data=useContext(Kahani)

  return (
    <>
      <div>
        <h1>hiiiiiiiiiiiiiiii
          lemme tell u a story</h1>
          <h2>{data.name}</h2>
        <h3>{data.description}</h3>
      </div>
    </>
  )
}

export default App
