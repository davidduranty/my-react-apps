import React from "react";
import propTypes from "prop-types";

const PokemonCard = ({ pokemon }) => {
  return (
    <figure>
      {pokemon.imgSrc !== undefined ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>????</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
};
PokemonCard.propTypes = {
  pokemon: propTypes.shape({
    name: propTypes.string.isRequired,
    imgSrc: propTypes.string,
  }).isRequired,
};
export default PokemonCard;
