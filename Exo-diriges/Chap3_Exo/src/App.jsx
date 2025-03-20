import { useState } from "react"

/*export default function App() {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    setCount(count - 1);
  }
    
    return (
        <main className="container">
            
            <h1>
                Combien de fois mon enseignant va-t-il dire le mot state dans ce chapitre ?
            </h1>
            
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={decreaseCount}>– </button>
                <h2 className="count">{count}</h2>
                <button className="plus" aria-label="Increase count" onClick={incrementCount}>+</button>
            </div>
        </main>
    )
}*/

/*export default function App() {

  const [value, setValue] = useState("Oui");

  const changeValue = () => {
    setValue(value === "Oui" ? "Non" : "Oui");
  }

  return (
    <main>
      <h1 className="title">Est-ce que je sors ce soir?</h1>
      <button className="value" onClick={changeValue}>{value}</button>
    </main>
  );
}*/

export default function App() {

  const [myFavoriteThings, setMyFavoriteThings] = useState([]);
  
  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThing() {
    setMyFavoriteThings(
        prevFavThings => [...prevFavThings,allFavoriteThings[prevFavThings.length]]
    )
  }

  
  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
  )
}