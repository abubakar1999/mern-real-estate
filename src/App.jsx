import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  console.log(count)
  
  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App
