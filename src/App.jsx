import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [cnt, setCount] = useState(0)
  const cntIn = () =>{
    if (cnt == 5) {
      setCount(5)
      alert('Max Reached')
    }else
    setCount(cnt++)
  }
  const cntDc = () =>{
    if (cnt == 0) {
      setCount(0)
      alert('Minimum reached')
    }
    setCount(cnt--)
  }
  return (
    <>
      <h1>Hello vite + react</h1>
      <h2>this is a conter project</h2>
      <h2>counter value is {cnt}</h2>
      <button onClick={cntIn}>Increase </button>
      <button onClick={cntDc}> Decrease</button>
    </>
  )
}

export default App
