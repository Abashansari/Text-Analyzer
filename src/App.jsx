import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Analyzer from './component/analyzer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h3>
 <Analyzer title="Text Analyzer website.." />
 </h3>
    </>
  )
}

export default App
