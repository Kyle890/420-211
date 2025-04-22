import './App.css'
import React from "react"

export default function App() {
  const [pokemonData, setPokemonData] = React.useState({})
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    async function fetchPokemonData(){
      if(name){
        try {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
          const data = await res.json();
          setPokemonData(data);
        } catch (error) {
          console.error("Erreur lors de la récupération des données", error);
        }
      } else {
        setPokemonData(null)
      }
    };


      fetchPokemonData();

  }, [name]);

  function handleChange(event) {
      setName(event.target.value)
  }
  

  return (
    <div>
      <h1>{name ? `Le nom du pokemon est ${name.toLowerCase()}` : "Veuilliez écrire un nom ci-dessus"}</h1>
      <label>Nom du pokemon :  <input 
          type="text"
          name= "nom"
          value={name}
          onChange={handleChange}
        /></label>
      {pokemonData && <p>{pokemonData.name}</p>}
      <img src= {pokemonData && pokemonData.sprites?.front_default} alt="" />
      {pokemonData && <pre>{JSON.stringify(pokemonData, null, 2)}</pre>}
    </div>
  )
}