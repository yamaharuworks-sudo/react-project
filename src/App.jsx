import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import ProjectCard from './ProjectCard'

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <div className="board-row">
      <button className='square'>1</button>
      <button className='square'>2</button>
      <button className='square'>3</button>
    </div>
    
    <div className="board-row">
      <button className='square'>4</button>
      <button className='square'>5</button>
      <button className='square'>6</button>
    </div>

    <div className="board-row">
      <button className='square'>7</button>
      <button className='square'>8</button>
      <button className='square'>9</button>
    </div>
    
    <div style={{display: "flex", gap: "10px"}}>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>reset
      </button>
    </div>


  </>
  
  );

  
}