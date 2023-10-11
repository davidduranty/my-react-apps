
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/Navbar";
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

   function handleClickPlus() {
    setPokemonIndex(pokemonIndex - 1);
  }
  function handleClickMoins() {
    setPokemonIndex(pokemonIndex + 1);
  }

  // function handleButton() {
  //   if (pokemonIndex !== 0)
  //     return <button onClick={handleClickPlus}>Précédent</button>;
  //   else return;
  // }

  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      
      <NavBar pokemonList={pokemonList} pokemonIndex={pokemonIndex} handleClickMoins={handleClickMoins} handleClickPlus={handleClickPlus} />
    </div>
  );
}

export default App;
