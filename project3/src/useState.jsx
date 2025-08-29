import React, { useState } from 'react'

function Count() {

    let [count, setCount] = useState(0)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=> {setCount(++count)
      }}>Count wadhnar ahe</button>
      <button onClick={()=> {setCount(--count)
      }}>Count kmi krnar ahe</button>
    </>
  )
}

export default Count
