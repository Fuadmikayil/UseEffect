import React, { useState } from 'react'

const App = () => {
  const [num,setNum] = useState(0)
  const add = () =>{
    setNum(num+1)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={add}>Add </button>
    </div>
  )
}

export default App
