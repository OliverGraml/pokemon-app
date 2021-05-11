import './App.css';
import PokemonCard from './PokemonCard';

function App() {
  const pokemon = [
    {name: 'Pikachu', type: 'Electro'},
    {name: 'Glumanda', type: 'Feuer'},
    {name: 'Bisasam', type: 'Pflanze'},
    {name: 'Schiggy', type: 'Wasser'},
    {name: 'Smettbo', type: 'Käfer'},
    {name: 'Vulpix', type: 'Feuer'},
  ];

  return (
    <div>
      <h1>Pokemon</h1>
      {pokemon.map((pokemon) => (
        <PokemonCard name={pokemon.name} type={pokemon.type} />
      ))}
    </div>
  );
}

export default App;
