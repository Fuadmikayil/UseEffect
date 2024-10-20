import React, { useState } from 'react'
import { useEffect } from 'react'
const App = () => {
  const [data, setData] = useState([])
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json))
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <h1>Fetching</h1>
      {
        data.map(item => {
          return <h2 key={item.id}> {item.title} </h2>
        })
      }
    </div>
  )
}

export default App
