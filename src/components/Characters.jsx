import { useState, useEffect } from "react";
import './styles/Characters.css'

const Characters = (props) => {
  const [characters, setCharacters] = useState([]);
  let darkModeStyle = props.darkMode ? 'DarkMode' : '';

  //Async Await implementation to avoid undefined array
  const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    setCharacters(data.results);
    console.log(data);
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return(
    <div className={`Characters ${darkModeStyle}`}>
      {characters.map(character => (
        <div className="Characters__item">
          <img src={character.image} alt={character.name} />
          <h3>{character.name}</h3>
          <p>Status: {character.status}</p>
          <p>Location: {character.location.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Characters;