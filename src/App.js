import PokemonCard from './PokemonCard';
import {useState} from 'react';
import Pokeball from './Pokeball';
import styled from 'styled-components/macro';

function App() {
  const initialPokemon = [
    {name: 'Pikachu', type: 'Electro'},
    {name: 'Glumanda', type: 'Feuer'},
    {name: 'Bisasam', type: 'Pflanze'},
    {name: 'Schiggy', type: 'Wasser'},
    {name: 'Smettbo', type: 'Käfer'},
    {name: 'Vulpix', type: 'Feuer'},
  ];

  const [pokemon, setPokemon] = useState(initialPokemon);
  const [pokedex, setPokedex] = useState([]);

  function placeIntoPokedex(name) {
    const pokemonToAdd = pokemon.find((pokemon) => pokemon.name === name);
    setPokedex([pokemonToAdd, ...pokedex]);
    removePokemon(name);
  }

  function removePokemon(name) {
    const remainingPokemon = pokemon.filter((pokemon) => pokemon.name !== name);
    setPokemon(remainingPokemon);
  }

  function setPokemonFree(name) {
    const pokemonToAdd = pokedex.find((pokemon) => pokemon.name === name);

    const remainingPokemon = pokedex.filter((pokemon) => pokemon.name !== name);
    setPokedex(remainingPokemon);

    setPokemon([pokemonToAdd, ...pokemon]);
  }

  //render function
  return (
    <div>
      <h1>Pokemon</h1>
      <h3>My Pokeball ({pokedex.length})</h3>
      <GridWrapper className="flex-container">
        {pokedex.map((pokemon) => (
          <Pokeball
            name={pokemon.name}
            type={pokemon.type}
            onSetFree={setPokemonFree}
          />
        ))}
      </GridWrapper>
      {pokemon.map((pokemon) => (
        <PokemonCard
          name={pokemon.name}
          type={pokemon.type}
          onPlaceIntoPokedex={placeIntoPokedex}
        />
      ))}
    </div>
  );
}

export default App;

const GridWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;
