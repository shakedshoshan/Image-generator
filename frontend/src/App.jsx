import { useState } from 'react'
import './App.css'
import GenerateImage from './components/GenerateImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GenerateImage />
    </>
  )
}

export default App
