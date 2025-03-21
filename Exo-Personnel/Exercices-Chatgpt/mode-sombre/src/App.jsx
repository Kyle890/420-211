import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [modeSombre, setModeSombre] = useState(localStorage.getItem("theme") === "sombre");

  useEffect(() => {
    const doc = document.getElementsByTagName('body')[0];
    
    if (modeSombre) {
      doc.classList.add("sombre");
      localStorage.setItem("theme", "sombre");
    } else {
      doc.classList.remove("sombre");
      localStorage.setItem("theme", "clair");
    }
  }, [modeSombre]);

  function handleClick() {
    console.log("Le bouton a été cliqué.");
    setModeSombre(prevMode => !prevMode);
  }

  return (
    <main>
      <h1>En cliquant sur le bouton pour changer le style de la page</h1>
      <button onClick={handleClick}>Click the button</button>
    </main>
  );
}