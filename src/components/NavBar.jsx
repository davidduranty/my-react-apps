import React from "react";


const NavBar = ({ pokemonList, pokemonIndex, handleClickMoins, handleClickPlus }) => {
  

 
  return (
    <div>
      {pokemonIndex !== 0 ? (
        <button onClick={handleClickPlus}>
          Précédent
        </button>
      ) : (
        ""
      )}
      {pokemonIndex !== pokemonList.length - 1 ? (
        <button onClick={handleClickMoins}>Suivant</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
