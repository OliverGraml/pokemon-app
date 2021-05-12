import styled from 'styled-components/macro';

export default function Pokeball({name, type, onSetFree}) {
  return (
    <BallWrapper style={{background: getColor(type)}}>
      <h3>{name}</h3>
      <p>{type}</p>
      <button onClick={() => onSetFree(name)}>Free</button>
    </BallWrapper>
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

const BallWrapper = styled.article`
  color: ivory;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  display: grid;
  place-items: center;

  button {
    background: transparent;
    border-radius: 5px;
    border: 3px solid white;
    color: white;
    cursor: pointer;
  }
`;

/* .ball {
  color: ivory;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  display: grid;
  place-items: center;

  .ball button {
  background: transparent;
  border-radius: 5px;
  border: 3px solid white;
  color: white;
  cursor: pointer;
} */
