import { useState } from "react"
import './App.css'

export default function App() {

    const [count, setCount] = useState(0);

    function decrementCount(){
      setCount(prevcount => prevcount - 1)
    }

    function incrementCount(){
      setCount(prevcount => prevcount + 1)
    }
    
    return (
        <main className="container">
            
            <h1>
                Combien de fois mon enseignant va-t-il dire le mot state dans ce chapitre ?
            </h1>
            
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={decrementCount}>-</button>
                <h2 className="count">{count}</h2>
                <button className="plus" aria-label="Increase count" onClick={incrementCount}>+</button>
            </div>
        </main>
    )
}