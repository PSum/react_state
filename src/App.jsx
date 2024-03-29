import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [index, setIndex] = useState(0);
  
  function test () {
    setIndex(index +1)
  }
  return (
    <>
      <div>
      <button onClick={test}>Change Index</button>
      <p>{index}</p>
      </div>
    </>
  )
}

export default App
