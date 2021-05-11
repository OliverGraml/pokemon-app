import './Pokeball.css';

export default function Pokeball({name, type, onSetFree}) {
  return (
    <article className="ball" style={{background: getColor(type)}}>
      <h3>{name}</h3>
      <p>{type}</p>
      <button onClick={() => onSetFree(name)}>Free</button>
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
