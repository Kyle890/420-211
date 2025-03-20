import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
   
  function handleClick() {
      console.log("J'ai été cliqué!")
  }
   
  return (
       <div className="container">
           <img src="https://picsum.photos/640/360" onPointerOver = {() => (console.log("L'image a été survolé"))}/>
           <button onClick={handleClick}>Bouton</button> 
       </div>
   )
}