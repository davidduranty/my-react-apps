import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];
function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const pokemon = pokemonList[pokemonIndex];

  // function handleButton() {
  //   if (pokemonIndex !== 0)
  //     return <button onClick={handleClickPlus}>Précédent</button>;
  //   else return;
  // }
  function handleClick(index) {
    setPokemonIndex(index);
  }
  return (
    <div>
      <PokemonCard pokemon={pokemon} />

      <NavBar pokemonList={pokemonList} handleClick={handleClick} />
    </div>
  );
}

export default App;
