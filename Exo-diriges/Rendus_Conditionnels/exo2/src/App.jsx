import './App.css'
import { useState } from "react"
import Count from './Count'
import { useEffect } from 'react'

export default function App() {

    const [count, setCount] = useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)    
    }

    useEffect(() => {
      console.log("Le composant Count a été mis a jour " + count + " fois.")
    }, [count])

    return (
        <main className="container">
            
            <h1>
                Combien de fois mon enseignant va-t-il dire le mot state dans ce chapitre ?
            </h1>
            
            <div className="counter">
                <button className="minus" onClick={subtract} aria-label="Decrease count">–</button>
                <Count number = {count}/>
                <button className="plus" onClick={add} aria-label="Increase count">+</button>
            </div>
        </main>
    )
}