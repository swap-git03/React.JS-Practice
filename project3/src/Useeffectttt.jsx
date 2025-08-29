import React, { useEffect , useState} from 'react'

function Useeffectttt() {
 let [count, setCount]= useState(0);
  useEffect(()=>{ 
    setTimeout(()=>{
      setCount(++count)
    },1000)
  })

  return (
    <>
      <h1>Counting seconds from {count}</h1>
    </>
  )
}

export default Useeffectttt
