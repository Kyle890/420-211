import { useState } from 'react'
import './App.css'

export default function App() {

  const [modeSombre, setModeSombre] = useState(false);

  function onHandleClick(){
    console.log("Le bouton a été cliquez.")

    setModeSombre(!modeSombre)

    const main = document.getElementById('id');
  }

  return(
    <main id='Page'>
      <h1>En cliquant sur le bouton pour changer le style de la page</h1>
      <button onClick={onHandleClick}>Cliquez-moi</button>
    </main>
  )
}
