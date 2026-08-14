import { useState } from 'react'
import './App.css'
import StaggerCurtainsWipe from './components/StaggerCurtainsWipe'

function App() {
  const [key, setKey] = useState(0)

  return (
    <>
      <StaggerCurtainsWipe transitionKey={key}>
        <p>
          Hello world
        </p>
        <button onClick={() => setKey((prev) => prev + 1)}>Animate</button>
      </StaggerCurtainsWipe>
    </>
  )
}

export default App

