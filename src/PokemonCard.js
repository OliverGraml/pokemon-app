import React from 'react';
import './PokemonCard.css';

export default function PokemonCard({name, type, onPlaceIntoPokedex}) {
  return (
    <article className="card" style={{background: getColor(type)}}>
      <h2>{name}</h2>
      <p>{type}</p>
      <button onClick={() => onPlaceIntoPokedex(name)}>Pokeball</button>
    </article>
  );
}

function getColor(type) {
  const backgroundColors = {
    Elektro: 'gold',
    Feuer: 'crimson',
    Pflanze: 'green',
    Wasser: 'midnightblue',
    Käfer: 'brown',
    Default: 'silver',
  };
  return backgroundColors[type]
    ? backgroundColors[type]
    : backgroundColors['Default'];
}
