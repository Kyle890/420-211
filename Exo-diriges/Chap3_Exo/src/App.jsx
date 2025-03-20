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

/*export default function App() {

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
}*/


import avatar from "./images/user.png"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function App() {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (514) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    function toggleFavorite() {
        console.log("Toggle Favorite")
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="Photo de profil de John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={false}
                        className="favorite-button"
                    >
                        <img
                            src={starEmpty}
                            alt="icône étoile vide"
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        John Doe
                    </h2>
                    <p className="contact">+1 (212) 555-1212</p>
                    <p className="contact">itsmyrealname@example.com</p>
                </div>

            </article>
        </main>
    )
}