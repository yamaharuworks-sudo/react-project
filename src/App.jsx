import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import ProjectCard from './ProjectCard'

export default function App() {
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
    

    <div>
      <h1>Haruna's Website</h1>
      <ProjectCard 
      title="Hotel Website"
      tech="HTML"/>
      <ProjectCard 
      title="ABC"
      tech="dfasfadf"/>
    </div>
  </>
  
  );

  
}