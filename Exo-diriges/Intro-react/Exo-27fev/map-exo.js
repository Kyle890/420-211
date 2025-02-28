//Exo 1
const nums = [1, 2, 3, 4, 5];

const nouveauTab = nums.map((x) => x * x);

console.log(nouveauTab);

//Exo 2
const names = ["alice","bob","chaRlie","danielle"];

const nvtab = names.map((name) => name[0].toUpperCase() + name.slice(1).toLowerCase());

console.log(nvtab);

//Exo 3
const pokemons = ["Bulbasaur", "Charmander", "Squirtle"]

const tableaPokemons = pokemons.map((pokemon) => `<p>${pokemon}</p>`);

console.log(tableaPokemons);