import React, { useState } from 'react'
import { useEffect } from 'react'
const App = () => {
  const [num, setNum] = useState(0)
  const add = () => {
    setNum(num + 1)
  }

  useEffect(() => {
    if (num === 10) {
      console.log("number is 10")
    }
  }, [num])
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={add}>Add </button>
    </div>
  )
}

export default App
