import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

PokemonCard.PropTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  onPlaceIntoPokedex: PropTypes.func,
};

export default function PokemonCard({name, type, onPlaceIntoPokedex}) {
  return (
    <CardWrapper style={{background: getColor(type)}}>
      <h2>{name}</h2>
      <p>{type}</p>
      <button onClick={() => onPlaceIntoPokedex(name)}>Pokeball</button>
    </CardWrapper>
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

const CardWrapper = styled.article`
  background: hotpink;
  padding: 0.4rem;
  color: ivory;
  border-radius: 0.4rem;
  display: grid;
  place-items: center;
  margin-bottom: 0.5rem;

  h2,
  p {
    text-shadow: 0 -1px 0 #999;
  }

  button {
    background: transparent;
    border: 3px solid white;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px 16px;
    color: ivory;
  }
`;

/* .card {
  background: hotpink;
  padding: 0.4rem;
  color: ivory;
  border-radius: 0.4rem;
  display: grid;
  place-items: center;
  margin-bottom: 0.5rem;
}
.card h2,
.card p {
  text-shadow: 0 -1px 0 #999;
}

.card button {
  background: transparent;
  border: 3px solid white;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 16px;
  color: ivory;
}


} */
