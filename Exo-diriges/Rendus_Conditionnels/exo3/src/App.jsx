import './App.css'
import padsData from "./assets/pads"
import { useState } from 'react'
import Pads from './Pads'

export default function App() {
  const [pads, setPads] = useState(padsData)

  const buttonElements = pads.map(pad => (
      <Pads key={pad.id} color={pad.color} use={pad.on}/>
  ))
  
  return (
      <main>
          <div className="pad-container">
              {buttonElements}
          </div>
      </main>
  )
}