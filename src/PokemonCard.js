import React from 'react';
import './PokemonCard.css';

export default function PokemonCard({name, type}) {
  return (
    <article className="card" style={{background: getColor(type)}}>
      <h2>{name}</h2>
      <p>{type}</p>
    </article>
  );
}

function getColor(type) {
  const backgroundColors = {
    Elektro: 'black',
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
