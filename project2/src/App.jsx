import bmw from "./assets/bmw.jpeg"
import rr from "./assets/rr.jpeg"
import audi from "./assets/audi.jpeg"
import './App.css'
import Card from './Card'

function App() {


  return (
    <> 
    <div className="app">
      <Card img={audi} name='Audi' price='1.2cr'/>
      <Card img={rr} price='6cr' name="Rolls Royce" />
      <Card img={bmw} price='80lakh' name="BMW" />
      </div>

    </>
  )
}

export default App
